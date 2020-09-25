import React from 'react';
import { Image } from 'rebass';

export const Avatar = ({ image }) => (
  <Image
    src={image}
    sx={{
      width: 48,
      height: 48,
      borderRadius: 9999,
    }}
  />
);
