import React from 'react';
import { Flex, Box } from 'rebass';
import { Input } from '@rebass/forms';
import { Avatar } from '../../atoms/avatar';

export const DashboardNav = () => {
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
        <Avatar image="https://jacobgranberry.com/static/media/profile.2c9292dd.jpg" />
      </Flex>
    </Box>
  );
};
