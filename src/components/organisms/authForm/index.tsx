import React, { useState } from 'react';
import { Input } from '@rebass/forms';
import { Button } from 'rebass';
import { useAuth } from '../../../utils/hooks/useAuth';
import { useForm } from 'react-hook-form';

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
    <form onSubmit={handleSubmit(onSubmit)}>
      {['signup', 'signin', 'forgotpass'].includes(props.type) && (
        <Input
          name="email"
          type="email"
          placeholder="Email"
          error={errors.email}
          ref={register({
            required: 'Please enter an email',
          })}
        />
      )}

      {['signup', 'signin', 'changepass'].includes(props.type) && (
        <Input
          name="pass"
          type="password"
          placeholder="Password"
          error={errors.pass}
          ref={register({
            required: 'Please enter a password',
          })}
        />
      )}

      {['signup', 'changepass'].includes(props.type) && (
        <Input
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
      )}

      <div className="field">
        <p className="control ">
          <Button type="submit">{props.typeValues.buttonText}</Button>
        </p>
      </div>
    </form>
  );
}

export default AuthForm;
