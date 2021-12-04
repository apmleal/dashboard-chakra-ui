import { Flex, useBreakpointValue, IconButton, Icon } from '@chakra-ui/react';

import { NotificationsNav } from './NotificationsNav';
import { Profile } from './Profile';
import { Logo } from './Logo';
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext';
import { RiMenuLine } from 'react-icons/ri';

export const Header = () => {
  const { onOpen } = useSidebarDrawer();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      as="header"
      w="100%"
      h="16"
      mx="auto"
      px="4"
      align="center"
      bg="white"
      borderBottomWidth={1}
      borderBottomColor="gray.300"
    >
      {!isWideVersion && (
        <IconButton
          aria-label="Abrir Navegação"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
          mt="2"
        >
          onOpen
        </IconButton>
      )}

      <Logo />
      <Flex align="center" ml="auto">
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
};
