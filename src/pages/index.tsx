import React, { useEffect } from 'react';
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
      <Heading fontSize="5vw">Some shit</Heading>
      <Heading fontSize="5vw">
        Another line <Underline>OMG</Underline>
      </Heading>
      <Heading fontSize="5vw">Some shit</Heading>
    </MainLayout>
  );
};
export default Home;
