import React from 'react';
import { Box } from 'rebass';
import { useAuth } from '../../../utils/hooks/useAuth';

export const Logout = ({
  size = 24,
  color = 'currentColor',
  style,
}: {
  size?: number;
  color?: string;
  style?: React.CSSProperties;
}) => {
  const { signout } = useAuth();

  return (
    <Box
      onClick={() => signout()}
      className="logout-icon"
      style={{ cursor: 'pointer', ...style }}
      sx={{
        '&:hover': { svg: { stroke: 'secondary.100' } },
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke={color} width={size}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
        />
      </svg>
    </Box>
  );
};
