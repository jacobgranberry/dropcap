import React from 'react';
import { Anchor } from '../anchor';
import { Text, Flex } from 'rebass';

const AuthFooter = ({ type, typeValues }) => {
  return (
    <div className="AuthFooter has-text-centered">
      {type === 'signup' && (
        <Flex flexDirection="row">
          <Text fontSize={2} mr={1} color="textAlt">
            Have an account already?
          </Text>

          <Anchor href="/auth/signin" sx={{ fontSize: 2 }}>
            <a>{typeValues.linkTextSignin}</a>
          </Anchor>
        </Flex>
      )}

      {type === 'signin' && (
        <>
          <Anchor sx={{ fontSize: 2 }} href="/auth/forgotpass">
            <a>{typeValues.linkTextForgotpass}</a>
          </Anchor>
          <Flex flexDirection="row">
            <Text fontSize={2} mr={1} color="textAlt">
              Don&apos;t have an account?
            </Text>
            <Anchor href="/auth/signup" sx={{ fontSize: 2 }}>
              {typeValues.linkTextSignup}
            </Anchor>
          </Flex>
        </>
      )}
    </div>
  );
};

export default AuthFooter;
