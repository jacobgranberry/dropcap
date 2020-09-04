import React from 'react';
import { Flex } from 'rebass';
import { DashboardNav } from '../../organisms/dashboardNav/dashboardNav';

export const DashboardLayout = ({ children }) => (
  <Flex flexDirection="column" width={1} height="100%">
    <DashboardNav />
    {children}
  </Flex>
);
