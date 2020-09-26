import React from 'react';
import { Image, SxStyleProp } from 'rebass';

export const Book = ({ bookImage, bookTitle, sx }: { bookImage: string; bookTitle: string; sx?: SxStyleProp }) => (
  <Image width={160} src={bookImage} alt={bookTitle} sx={{ boxShadow: 'xsmall', flexShrink: 0, ...sx }} />
);
