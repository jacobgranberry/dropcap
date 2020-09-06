import React, { useState } from 'react';
import FormAlert from '../../atoms/formAlert';
import AuthForm from '../../organisms/authForm';
import AuthSocial from '../../atoms/authSocial';
import AuthFooter from '../../atoms/authFooter';
import { useRouter } from 'next/router';

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

      <AuthForm type={type} typeValues={typeValues} onAuth={handleAuth} onFormAlert={handleFormAlert}></AuthForm>

      {['signup', 'signin'].includes(type) && (
        <>
          {providers && providers.length && (
            <>
              <div className="Auth__social-divider has-text-centered is-size-7">OR</div>
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
