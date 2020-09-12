import React, { useEffect } from 'react';
import { MainLayout } from '../components/layouts/mainLayout/mainLayout';
import { useAuth } from '../utils/hooks/useAuth';
import { useRouter } from 'next/router';

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

  return <MainLayout>main layout</MainLayout>;
};
export default Home;
