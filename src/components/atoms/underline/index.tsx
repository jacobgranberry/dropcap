import React, { FC } from 'react';
import { Box } from 'rebass';
import { gradients } from './gradients';

export const Underline: FC = ({ children }) => {
  const randNumInRange = (max) => Math.floor(Math.random() * (max - 1));
  const mergeArrays = (arrOne, arrTwo) => arrOne.map((item, i) => `${item} ${arrTwo[i]}`).join(', ');
  const buildGradient = (obj) => `linear-gradient(${obj.direction}, ${mergeArrays(obj.colors, obj.positions)})`;
  return (
    <Box
      as="span"
      sx={{
        backgroundImage: buildGradient(gradients.data[randNumInRange(gradients.data.length)]),
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 0.2em',
        backgroundPosition: '0 88%',
        transition: 'background-size 0.25s ease-in',
        '&:hover': {
          backgroundSize: '100% 88%',
        },
      }}
    >
      {children}
    </Box>
  );
};
