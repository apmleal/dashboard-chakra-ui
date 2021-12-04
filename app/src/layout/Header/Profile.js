import { Flex, Text, Box, Avatar } from '@chakra-ui/react';

export const Profile = ({ showProfileData = true }) => {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Andrei Leal</Text>
          <Text color="gray.400" fontSize="small">
            andreiptr1.8@gmail.com
          </Text>
        </Box>
      )}
      <Avatar size="md" name="Andrei Leal" />
    </Flex>
  );
};
