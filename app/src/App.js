import React from 'react';
import { ChakraProvider, Box, Grid } from '@chakra-ui/react';
import { ColorModeSwitcher } from './components/ColorModeSwitcher';

import { theme } from './styles/theme';
import { Auth } from './layout/Auth';
import { SidebarDrawerProvider } from './contexts/SidebarDrawerContext';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <SidebarDrawerProvider>
        {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
        <Auth></Auth>
      </SidebarDrawerProvider>
    </ChakraProvider>
  );
}

export default App;
