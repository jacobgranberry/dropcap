import React, { useState } from 'react';
import { Flex, Box } from 'rebass';
import { DashboardNav } from '../../organisms/dashboardNav/dashboardNav';
import { Sidebar } from '../../organisms/sidebar';

export const DashboardLayout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Flex flexDirection="column" width={1} height="100%" as="main">
      <Box
        className="grid-container"
        sx={{
          display: 'grid',
          gridTemplateColumns: ['1fr', null, `auto 1fr`],
          gridTemplateRows: '72px 1fr',
          gridTemplateAreas: [
            `
            "head"
            "main"
            `,
            null,
            `
           "sidebar head head head"
           "sidebar main main main"
           "sidebar main main main"
           "sidebar main main main"`,
          ],
          height: '100vh',
        }}
      >
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setSidebarOpen} />
        <DashboardNav />
        <Box as="main" bg="#F5F4F9" py={10} sx={{ gridArea: 'main' }}>
          {children}
        </Box>
      </Box>
    </Flex>
  );
};
