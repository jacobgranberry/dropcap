import React from 'react';
import SectionHeader from '../../atoms/sectionHeader';
import Auth from '../auth';
import { Flex } from 'rebass';

const AuthSection = ({ type, providers, afterAuthPath }) => {
  // Values for each auth type
  const allTypeValues = {
    signin: {
      // Top title
      title: 'Welcome back',
      // Submit button text
      buttonText: 'Sign in',
      // Link text to other auth types
      linkTextSignup: 'Sign Up',
      linkTextForgotpass: 'Forgot Password?',
    },
    signup: {
      title: 'Get yourself an account',
      buttonText: 'Sign up',
      linkTextSignin: 'Sign in',
    },
    forgotpass: {
      title: 'Get a new password',
      buttonText: 'Reset password',
    },
    changepass: {
      title: 'Choose a new password',
      buttonText: 'Change password',
    },
  };

  // Ensure we have a valid auth type
  const currentType = allTypeValues[type] ? type : 'signup';

  // Get values for current auth type
  const typeValues = allTypeValues[currentType];

  return (
    <Flex as="main" flexDirection="column" px={12} justifyContent="center" alignItems="center" width={1} height="100%">
      <SectionHeader
        title={allTypeValues[currentType].title}
        subtitle=""
        size={3}
        spaced={true}
        className="has-text-centered"
      />
      <Auth
        type={currentType}
        typeValues={typeValues}
        providers={providers}
        afterAuthPath={afterAuthPath}
        key={currentType}
      />
    </Flex>
  );
};

export default AuthSection;
