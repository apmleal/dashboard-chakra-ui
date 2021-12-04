import { Flex, Box } from '@chakra-ui/react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

export const Auth = () => {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex w="100%" mx="auto">
        <Sidebar />
        <Box flex="1"></Box>
      </Flex>
    </Flex>
  );
};
