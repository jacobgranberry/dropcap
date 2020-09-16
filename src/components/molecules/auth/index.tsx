import React, { useState } from 'react';
import FormAlert from '../../atoms/formAlert';
import AuthForm from '../../organisms/authForm';
import AuthSocial from '../../atoms/authSocial';
import AuthFooter from '../../atoms/authFooter';
import { useRouter } from 'next/router';
import { Text } from 'rebass';

const Auth = ({ afterAuthPath, type, typeValues, providers }) => {
  const router = useRouter();
  const [formAlert, setFormAlert] = useState(null);

  const handleAuth = () => {
    router.push(afterAuthPath);
  };

  const handleFormAlert = (data) => {
    setFormAlert(data);
  };

  return (
    <>
      {formAlert && <FormAlert type={formAlert.type} message={formAlert.message}></FormAlert>}

      <AuthForm type={type} typeValues={typeValues} onAuth={handleAuth} onFormAlert={handleFormAlert} />
      <Text color="textAlt">OR</Text>
      {['signup', 'signin'].includes(type) && (
        <>
          {providers && providers.length && (
            <>
              <AuthSocial
                type={type}
                buttonText={typeValues.buttonText}
                showLastUsed={true}
                providers={providers}
                onAuth={handleAuth}
                onError={(message) => {
                  handleFormAlert({
                    type: 'error',
                    message: message,
                  });
                }}
              />
            </>
          )}

          <AuthFooter type={type} typeValues={typeValues}></AuthFooter>
        </>
      )}
    </>
  );
};

export default Auth;
