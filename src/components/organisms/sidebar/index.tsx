import React from 'react';
import { Flex, Box, Text } from 'rebass';
import { Logo } from '../../atoms/logo';
import { SidebarProfile } from '../../molecules/sidebarProfile';

const SidebarMenuItem = ({ children }) => (
  <Box
    className="sidebar-menu-item"
    as="li"
    sx={{
      minHeight: 40,
      cursor: 'pointer',
      borderRadius: 'xsmall',

      '&:hover': { backgroundColor: 'rgba(220, 220, 220, .6)' },
    }}
  >
    <Text className="sidebar-menu-item-label">{children}</Text>
  </Box>
);

export const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <Box
      className="sidebar"
      as="aside"
      bg="white"
      color="textBody"
      p={3}
      width={isOpen ? 310 : 80}
      sx={{
        display: ['none', null, 'flex'],
        flexDirection: 'column',
        alignItems: 'left',
        height: '100vh',
        gridArea: 'sidebar',
        boxShadow: 'small',
      }}
    >
      <Flex
        className="sidebar-menu"
        as="ul"
        flexDirection="column"
        alignItems="center"
        width={1}
        sx={{ listStyle: 'none' }}
      >
        <Box
          width={20}
          height={20}
          bg={isOpen ? 'blue' : 'red'}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
        <Logo color="black" />
        <Box width={1} mt={8}>
          <SidebarMenuItem>Overview</SidebarMenuItem>
          <SidebarMenuItem>Goals</SidebarMenuItem>
        </Box>
        <Box width={1}>
          <Text textAlign="left" sx={{ textTransform: 'uppercase' }}>
            Shelves
          </Text>
          <SidebarMenuItem>All Books</SidebarMenuItem>
          <SidebarMenuItem>Want To Read</SidebarMenuItem>
        </Box>
      </Flex>
      <SidebarProfile />
    </Box>
  );
};
