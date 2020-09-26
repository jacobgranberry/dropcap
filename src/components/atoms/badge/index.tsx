import React, { ReactChild } from 'react';
import { Box } from 'rebass';

export const Badge = ({ color, children }: { color: string; children: ReactChild }) => (
  <Box
    className="badge"
    as="span"
    bg={`badges.${color}`}
    px={2}
    py={1}
    sx={{ '& + .badge': { marginLeft: '4px' }, borderRadius: 'xsmall', fontSize: 1 }}
  >
    {children}
  </Box>
);
