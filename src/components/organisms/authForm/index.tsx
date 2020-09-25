import React, { useState } from 'react';
import { Input, Label } from '@rebass/forms';
import { Button } from '../../atoms/button';
import { useAuth } from '../../../utils/hooks/useAuth';
import { useForm } from 'react-hook-form';
import { Flex, Box } from 'rebass';
import { Anchor } from '../../atoms/anchor';

function AuthForm(props) {
  const auth = useAuth();

  const [pending, setPending] = useState(false);
  const { handleSubmit, register, errors, getValues } = useForm();

  const submitHandlersByType = {
    signin: ({ email, pass }) => {
      return auth.signin(email, pass).then((user) => {
        // Call auth complete handler
        props.onAuth(user);
      });
    },
    signup: ({ email, pass }) => {
      return auth.signup(email, pass).then((user) => {
        // Call auth complete handler
        props.onAuth(user);
      });
    },
    forgotpass: ({ email }) => {
      return auth.sendPasswordResetEmail(email).then(() => {
        // Show success alert message
        props.onFormAlert({
          type: 'success',
          message: 'Password reset email sent',
        });
      });
    },
    changepass: ({ pass }) => {
      return auth.confirmPasswordReset(pass).then(() => {
        // Show success alert message
        props.onFormAlert({
          type: 'success',
          message: 'Your password has been changed',
        });
      });
    },
  };

  // Handle form submission
  const onSubmit = ({ email, pass }) => {
    // Show pending indicator
    setPending(true);

    // Call submit handler for auth type
    submitHandlersByType[props.type]({
      email,
      pass,
    })
      .catch((error) => {
        // Show error alert message
        props.onFormAlert({
          type: 'error',
          message: error.message,
        });
      })
      .finally(() => {
        // Hide pending indicator
        setPending(false);
      });
  };

  return (
    <Flex as="form" flexDirection="column" width={1} onSubmit={handleSubmit(onSubmit)} maxWidth={486} mt={10}>
      {['signup', 'signin', 'forgotpass'].includes(props.type) && (
        <>
          <Label htmlFor="email">Email</Label>
          <Input
            my={2}
            name="email"
            type="email"
            error={errors.email}
            ref={register({
              required: 'Please enter an email',
            })}
          />
        </>
      )}

      {['signup', 'signin', 'changepass'].includes(props.type) && (
        <>
          <Flex flexDirection="row" justifyContent="space-between" alignItems="flex-end">
            <Label htmlFor="pass" mt={4}>
              Password
            </Label>
            <Anchor sx={{ fontSize: 2, width: '100%', textAlign: 'right' }} href="/auth/forgotpass">
              <a>Forgot Password?</a>
            </Anchor>
          </Flex>
          <Input
            my={2}
            name="pass"
            type="password"
            error={errors.pass}
            ref={register({
              required: 'Please enter a password',
            })}
          />
        </>
      )}

      {['signup', 'changepass'].includes(props.type) && (
        <>
          <Label htmlFor="confirmPass">Confirm Password</Label>

          <Input
            my={2}
            name="confirmPass"
            type="password"
            placeholder="Confirm Password"
            error={errors.confirmPass}
            ref={register({
              required: 'Please enter your password again',
              validate: (value) => {
                if (value === getValues().pass) {
                  return true;
                } else {
                  return "This doesn't match your password";
                }
              },
            })}
          />
        </>
      )}
      <Box mx="auto" my={10}>
        <Button variant="primary" type="submit" isLoading={pending}>
          {props.typeValues.buttonText}
        </Button>
      </Box>
    </Flex>
  );
}

export default AuthForm;
