import React from 'react';
import { Flex } from 'rebass';
import { Nav } from '../../organisms/nav/nav';

export const MainLayout = ({ children }) => (
  <Flex flexDirection="column" width={1} height="100%">
    <Nav />
    {children}
  </Flex>
);
