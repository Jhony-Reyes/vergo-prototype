import React, { FC } from 'react';
import { VStack } from 'native-base';

const Layout: FC = ({ children }) => {
  return (
    <VStack paddingX={4} pb="10px" flex={1} bg="#000">
      {children}
    </VStack>
  );
};

export default Layout;
