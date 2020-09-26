import React, { useState } from 'react';
import { Flex } from 'rebass';
import { Star } from '../star';

export const StarRating = ({ totalStars = 5 }: { totalStars: number }) => {
  const [starsSelected, selectStar] = useState(0);
  return (
    <Flex>
      {[...Array(totalStars)].map((_, i) => (
        <Star key={i} color={i < starsSelected ? 'rating' : 'neutrals.100'} onClick={() => selectStar(i + 1)} />
      ))}
    </Flex>
  );
};
