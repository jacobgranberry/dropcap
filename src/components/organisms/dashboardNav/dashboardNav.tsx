import React from 'react';
import { Flex, Box, Button } from 'rebass';
import { Input } from '@rebass/forms';
import { useAuth } from '../../../utils/hooks/useAuth';

export const DashboardNav = () => {
  const { signout } = useAuth();

  return (
    <Box as="header" className="nav" width={1}>
      <Flex
        className="nav__container"
        sx={{ background: 'none' }}
        px={6}
        height="100%"
        minHeight="56px"
        width={1}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Input placeholder="Search by author, title, name" sx={{ maxWidth: 320 }} />
        <Button onClick={() => signout()}>Log Out</Button>
      </Flex>
    </Box>
  );
};
