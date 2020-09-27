import React from 'react';
import { Flex, Heading, Text, Box } from 'rebass';
import { Badge } from '../../atoms/badge';
import { Book } from '../../atoms/book';
import { StarRating } from '../../atoms/starRating';
// import Truncate from 'react-truncate';
// import { Anchor } from '../../atoms/anchor';
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
    className="book-card"
    as="article"
    flexDirection="row"
    bg="white"
    height={280}
    mt={10}
    px={4}
    py={3}
    width="auto"
    sx={{ boxShadow: 'xsmall', borderRadius: 'xsmall' }}
  >
    <Book bookImage={bookImage} bookTitle={bookTitle} sx={{ marginTop: -10, marginBottom: 5 }} />
    <Flex flexDirection="column" className="book-card-content" pl={5} mb={5}>
      <Heading as="h5" variant="h5" fontWeight="bolder">
        {bookTitle}
      </Heading>
      <Text fontSize={[2]} mt={1}>{`by ${bookAuthor}`}</Text>
      <StarRating totalStars={5} currentRating={3} sx={{ marginY: 2 }} />
      <Box maxHeight={246} sx={{ overflow: 'hidden', span: { fontSize: 2 } }}>
        <Text fontSize={2}>{bookSynopsis}</Text>
        {/* <Truncate
          lines={5}
          trimWhitespace
          ellipsis={
            <span>
              ...
              <Anchor sx={{ fontSize: 2, textDecoration: 'underline' }} href="/link/to/article">
                Read more
              </Anchor>
            </span>
          }
        >
          {bookSynopsis}
        </Truncate> */}
      </Box>
      <Flex flexDirection="row" mt="auto">
        <Badge color="red">Fantasy</Badge>
        <Badge color="blue">Series</Badge>
        <Badge color="green">Exciting</Badge>
      </Flex>
    </Flex>
  </Flex>
);
