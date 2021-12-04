import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },
  components: { Button: { baseStyle: { _focus: { boxShadow: 'none' } } } },
});
