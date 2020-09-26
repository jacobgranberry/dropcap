import React, { useState } from 'react';
import { Flex, SxStyleProp } from 'rebass';
import { Star } from '../star';

export const StarRating = ({
  totalStars = 5,
  currentRating = 0,
  sx,
}: {
  totalStars: number;
  currentRating: number;
  sx?: SxStyleProp;
}) => {
  const [starsSelected, selectStar] = useState(currentRating);
  return (
    <Flex sx={{ ...sx }}>
      {[...Array(totalStars)].map((_, i) => (
        <Star key={i} color={i < starsSelected ? 'rating' : 'neutrals.100'} onClick={() => selectStar(i + 1)} />
      ))}
    </Flex>
  );
};
