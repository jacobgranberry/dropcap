import React, { FC } from 'react';
import { Box } from 'rebass';

type ContainerProps = {
  variant: string;
  className: string;
};

export const Container: FC<ContainerProps> = ({ variant, children, className, ...props }) => (
  <Box
    className={className}
    sx={{
      maxWidth: variant || 'default',
      mx: 'auto',
      px: 3,
    }}
    {...props}
  >
    {children}
  </Box>
);
