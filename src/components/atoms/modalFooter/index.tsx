import React from 'react';
import { Box } from 'rebass';

export const ModalFooter = () => (
  <Box
    as="footer"
    width={1}
    sx={{
      minHeight: 64,
      borderTop: '1px solid gray',
      borderBottomLeftRadius: 'small',
      borderBottomRightRadius: 'small',
    }}
    p={4}
    bg="#F9FAFB"
  />
);
