import React, { useEffect } from 'react';
import { Flex, Box } from 'rebass';
import { MainLayout } from '../components/layouts/mainLayout/mainLayout';
import { useAuth } from '../utils/hooks/useAuth';
import { useRouter } from 'next/router';
import { Heading } from 'rebass';
import { Underline } from '../components/atoms/underline';

export const Home = (): JSX.Element => {
  const auth = useAuth();
  const router = useRouter();

  // Redirect to dashboard
  // if signed in.
  useEffect(() => {
    if (auth.user) {
      router.push('/dashboard');
    }
  }, [auth, router]);

  return (
    <MainLayout>
      <Box width={1} sx={{ position: 'relative' }}>
        <Flex flexDirection={['column', null, 'row']} width={1} maxWidth="wide" mx="auto" px={5} pt={128}>
          <Box width={[1, null, 1 / 2]}>
            <Heading fontSize="5vw">Jenny</Heading>
            <Heading fontSize="5vw">Is a big</Heading>
            <Heading fontSize="5vw">
              <Underline>DOODY</Underline>
            </Heading>
          </Box>
          <Box width={[1, null, 1 / 2]}>right</Box>
        </Flex>
        <Box
          display={['none', null, 'block']}
          height="100%"
          width={[2 / 5]}
          sx={{
            backgroundImage: 'linear-gradient(120deg,#f093fb 0%,#f5576c 100%)',
            position: 'absolute',
            top: 0,
            right: 0,
          }}
        />
      </Box>
    </MainLayout>
  );
};
export default Home;
