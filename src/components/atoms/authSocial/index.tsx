import React, { useEffect, useState } from 'react';
import { Image, Box, Flex, Text } from 'rebass';
import { Button } from '../button';
import { useAuth } from '../../../utils/hooks/useAuth';

function AuthSocial(props) {
  const auth = useAuth();
  const [pending, setPending] = useState(null);
  const [lastUsed, setLastUsed] = useState(null);

  const providerDisplayNames = {
    google: 'Google',
    facebook: 'Facebook',
    twitter: 'Twitter',
  };

  const onSigninWithProvider = (provider) => {
    setPending(provider);
    auth
      .signinWithProvider(provider)
      .then((user) => {
        // Remember this provider was last used
        // so we can indicate for next login.
        localStorage.setItem('lastUsedAuthProvider', provider);
        props.onAuth(user);
      })
      .catch((error) => {
        props.onError(error.message);
      })
      .finally(() => {
        setPending(null);
      });
  };

  // Get value of last used auth provider
  useEffect(() => {
    if (props.showLastUsed) {
      const lastUsed = localStorage.getItem('lastUsedAuthProvider');
      if (lastUsed) {
        setLastUsed(lastUsed);
      }
    }
  }, [props.showLastUsed]);

  return (
    <Flex flexDirection="row" my={10}>
      {props.providers.map((provider) => (
        <Button
          variant="secondary"
          isLoading={pending}
          sx={{
            mx: 2,
            minHeight: '42px',
            cursor: 'pointer',
            backgroundColor: 'white',
            border: '1px solid #DEDEDE',
            '&:hover': { backgroundColor: '#DEDEDE' },
          }}
          onClick={() => {
            onSigninWithProvider(provider);
          }}
          key={provider}
        >
          <Flex flexDirection="row" justifyContent="center" alignItems="center">
            <Box>
              <Image
                mr={2}
                width={20}
                src={`https://uploads.divjoy.com/icon-${provider}.svg`}
                alt={providerDisplayNames[provider]}
              />
            </Box>
            <Text color="textColor">{props.buttonText}</Text>

            {provider === lastUsed && <span>Last used</span>}
          </Flex>
        </Button>
      ))}
    </Flex>
  );
}

export default AuthSocial;
