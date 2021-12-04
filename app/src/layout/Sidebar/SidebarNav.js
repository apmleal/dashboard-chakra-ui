import { Flex, Stack } from '@chakra-ui/react';
import { RiDashboardLine } from 'react-icons/ri';

import { NavLink } from './NavLink';
import { NavSection } from './NavSection';

export const SidebarNav = ({ isIconSiderbar = false }) => {
  if (isIconSiderbar) {
    return (
      <Flex
        as="ul"
        listStyleType="none"
        color="white"
        flexDirection="column"
        justifyContent="space-between"
      >
        <NavLink isIconSiderbar={isIconSiderbar} icon={RiDashboardLine}>
          Dashboard
        </NavLink>
      </Flex>
    );
  }

  return (
    <Stack spacing="2" align="flex-start">
      <NavSection title="Geral">
        <Flex
          as="ul"
          listStyleType="none"
          color="white"
          flexDirection="column"
          justifyContent="space-between"
          w="100%"
        >
          <NavLink icon={RiDashboardLine}>Dashboard</NavLink>
        </Flex>
      </NavSection>
    </Stack>
  );
};
