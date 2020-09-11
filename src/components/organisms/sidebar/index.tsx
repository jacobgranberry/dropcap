import React from 'react';
import { Flex, Box, Text } from 'rebass';
import { Logo } from '../../atoms/logo';

export const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <Box
      className="sidebar"
      as="aside"
      bg="black"
      color="white"
      p={3}
      sx={{
        display: ['none', null, 'flex'],
        flexDirection: 'column',
        alignItems: 'left',
        height: '100vh',
        gridArea: 'sidebar',
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
        <Logo color="white" />
        <Box className="sidebar-menu-item" as="li">
          <Text className="sidebar-menu-item-label">MEnu Item</Text>
        </Box>
        <Box className="sidebar-menu-item" as="li">
          <Text className="sidebar-menu-item-label">MEnu Item</Text>
        </Box>
        <Box className="sidebar-menu-item" as="li">
          <Text className="sidebar-menu-item-label">MEnu Item</Text>
        </Box>
        <Box className="sidebar-menu-item" as="li">
          <Text className="sidebar-menu-item-label">MEnu Item</Text>
        </Box>
        <Box className="sidebar-menu-item" as="li">
          <Text className="sidebar-menu-item-label">MEnu Item</Text>
        </Box>
        <Box width={1}>
          <Text textAlign="left" sx={{ textTransform: 'uppercase' }}>
            Shelves
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};
