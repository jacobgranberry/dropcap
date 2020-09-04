import React from 'react';
import { Flex, Box, Text } from 'rebass';
import { Container } from '../../atoms/container/container';
import Link from 'next/link';

export const DashboardNav = () => {
  return (
    <Box as="header" className="nav" width={1}>
      <Container variant="default">
        <Flex
          className="nav__container"
          sx={{ background: 'none' }}
          minHeight="56px"
          width={1}
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          log out{' '}
        </Flex>
      </Container>
    </Box>
  );
};
