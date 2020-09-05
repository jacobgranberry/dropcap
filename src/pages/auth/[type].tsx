import React from 'react';
import AuthSection from './../../components/molecules/authSection';
import { useRouter } from 'next/router';
import { Flex, Box } from 'rebass';

const AuthTypePage = () => {
  const router = useRouter();
  const { type } = router.query;

  return (
    <Flex height="100%" flexDirection="row">
      <Box as="section" sx={{ flexGrow: 0 }} width={[520]} bg="rebeccapurple" />
      <Flex as="section" flexDirection="column" flex={1}>
        <AuthSection type={type} providers={['google', 'facebook', 'twitter']} afterAuthPath="/dashboard" />
      </Flex>
    </Flex>
  );
};

// Tell Next.js to export static files for each auth page
// See https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation
export const getStaticPaths = () => ({
  paths: [
    { params: { type: 'signin' } },
    { params: { type: 'signup' } },
    { params: { type: 'forgotpass' } },
    { params: { type: 'changepass' } },
  ],
  fallback: true,
});

export function getStaticProps({ params }) {
  return { props: {} };
}

export default AuthTypePage;
