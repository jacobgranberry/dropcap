import React from 'react';
import { Flex, Box, Text } from 'rebass';
import { Container } from '../../atoms/container';
import Link from 'next/link';
import { useAuth } from '../../../utils/hooks/useAuth';
import { Logo } from '../../atoms/logo';

export const Nav = () => {
  const { user, signout } = useAuth();

  return (
    <Box as="header" className="nav" width={1} sx={{ gridArea: 'head' }}>
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
          <Logo />
          <Box>
            <Flex>
              <Text>idk</Text>
              <Text>idk2</Text>
              <Text>idk3</Text>
            </Flex>
          </Box>
          <Box>
            {!user ? (
              <Link href={'/auth/signin'}>
                <a>Sign in</a>
              </Link>
            ) : (
              <button onClick={() => signout()}>Log Out</button>
            )}
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
