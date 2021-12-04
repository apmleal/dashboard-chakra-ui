import { Box, Text, Stack } from '@chakra-ui/react';

export const NavSection = ({ title, children }) => {
  return (
    <Box width="100%">
      <Text fontWeight="bold" color="white" fontSize="small">
        {title}
      </Text>
      <Stack spacing="4" mt="4" align="stretch">
        {children}
      </Stack>
    </Box>
  );
};
