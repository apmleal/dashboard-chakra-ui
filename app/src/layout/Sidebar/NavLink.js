import { Box, Link, Icon, Text } from '@chakra-ui/react';

export const NavLink = ({
  icon,
  children,
  isIconSiderbar = false,
  ...rest
}) => {
  return (
    <Box
      as="li"
      px={isIconSiderbar && '6'}
      py="3"
      w={isIconSiderbar && '16'}
      _hover={{
        w: '64',
        bg: isIconSiderbar && '#20a8d8',
        color: !isIconSiderbar && '#20a8d8',
      }}
      overflow="hidden"
    >
      <Link display="flex" align="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml={isIconSiderbar ? '8' : '6'} fontWeight="medium">
          {children}
        </Text>
      </Link>
    </Box>
  );
};
