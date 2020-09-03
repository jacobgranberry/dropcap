import React from 'react';
import { Flex, Box, Text } from 'rebass';
import { Container } from '../../atoms/container/container';
import Link from 'next/link';
import { useUser } from '../../../utils/hooks/useUser';

export const Nav = () => {
  const { user, logout } = useUser();

  return (
    <Box as="header" className="nav" width={1}>
      <Container className="container" variant="default">
        <Flex
          className="nav__container"
          sx={{ background: 'none' }}
          minHeight="56px"
          width={1}
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>DropCap</Box>
          <Box>
            <Flex>
              <Text>idk</Text>
              <Text>idk2</Text>
              <Text>idk3</Text>
            </Flex>
          </Box>
          <Box>
            {!user ? (
              <Link href={'/login'}>
                <a>Sign in</a>
              </Link>
            ) : (
              <button onClick={() => logout()}>Log Out</button>
            )}
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
