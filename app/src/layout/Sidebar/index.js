import {
  Box,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Icon,
  useBreakpointValue,
} from '@chakra-ui/react';

import { useCallback, useState } from 'react';
import { RiArrowLeftFill, RiArrowRightFill } from 'react-icons/ri';

import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext';
import { SidebarNav } from './SidebarNav';

export const Sidebar = () => {
  const { isOpen, onClose } = useSidebarDrawer();

  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  });

  const [isIconSiderbar, setIsIconSiderbar] = useState(true);
  const handleSidebar = useCallback(() => {
    setIsIconSiderbar(!isIconSiderbar);
  }, [isIconSiderbar]);

  if (isDrawerSidebar) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg="gray.700">
            <DrawerCloseButton mt="2" color="white" />
            <DrawerHeader color="white">Navegação</DrawerHeader>
            <DrawerBody>
              <SidebarNav isIconSiderbar={false} />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    );
  }

  return (
    <Box
      as="aside"
      w={isIconSiderbar ? '16' : '64'}
      px={!isIconSiderbar && '4'}
      py={!isIconSiderbar && '6'}
      bg="gray.700"
      pos="fixed"
      h="full"
      transition="width 0.5s ease-in-out;"
    >
      <SidebarNav isIconSiderbar={isIconSiderbar} />
      <Button
        variant="link"
        left="0px"
        bg="gray.900"
        position="absolute"
        bottom="64px"
        borderRadius="0"
        px="6"
        py="3"
        w="full"
        onClick={handleSidebar}
      >
        <Icon
          as={isIconSiderbar ? RiArrowRightFill : RiArrowLeftFill}
          fontSize="20"
        />
      </Button>
    </Box>
  );
};
