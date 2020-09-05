import React from 'react';
import Link from 'next/link';

const AuthFooter = ({ type, typeValues }) => {
  return (
    <div className="AuthFooter has-text-centered">
      {type === 'signup' && (
        <>
          Have an account already?
          <Link href="/auth/signin">
            <a>{typeValues.linkTextSignin}</a>
          </Link>
        </>
      )}

      {type === 'signin' && (
        <>
          <Link href="/auth/signup">
            <a>{typeValues.linkTextSignup}</a>
          </Link>

          <Link href="/auth/forgotpass">
            <a>{typeValues.linkTextForgotpass}</a>
          </Link>
        </>
      )}
    </div>
  );
};

export default AuthFooter;
