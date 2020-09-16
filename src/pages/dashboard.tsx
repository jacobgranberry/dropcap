import React, { useEffect } from 'react';
import { DashboardLayout } from '../components/layouts/dashboardLayout/dashboardLayout';
import { useAuth } from '../utils/hooks/useAuth';
import { useRouter } from 'next/router';

const Dashboard = (): JSX.Element => {
  const auth = useAuth();
  const router = useRouter();

  // Redirect to signin
  // if not signed in.
  useEffect(() => {
    if (auth.user === false) {
      router.push('/');
    }
  }, [auth, router]);

  return <DashboardLayout>dashboard</DashboardLayout>;
};

export default Dashboard;
