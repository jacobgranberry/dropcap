import React from 'react';
import { Flex, Box, Heading, Text } from 'rebass';
import { Book } from '../../atoms/book';
import { StarRating } from '../../atoms/starRating';

export const BookCard = ({
  bookImage,
  bookTitle,
  bookAuthor,
  bookSynopsis,
}: {
  bookImage: string;
  bookTitle: string;
  bookAuthor: string;
  bookSynopsis: string;
}) => (
  <Flex
    as="article"
    flexDirection="row"
    bg="white"
    mt={10}
    px={4}
    py={3}
    width="auto"
    sx={{ boxShadow: 'xsmall', borderRadius: 'xsmall' }}
  >
    <Book bookImage={bookImage} bookTitle={bookTitle} sx={{ marginTop: -10, marginBottom: 5 }} />
    <Box pl={5}>
      <Heading as="h5" variant="h5" fontWeight="bolder">
        {bookTitle}
      </Heading>
      <Text fontSize={[2]} mt={1}>{`by ${bookAuthor}`}</Text>
      <StarRating totalStars={5} />
      <Text fontSize={[2]} mt={2}>
        {bookSynopsis}
      </Text>
    </Box>
  </Flex>
);
