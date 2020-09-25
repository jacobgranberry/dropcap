import React, { FC } from 'react';
import { Flex, Heading } from 'rebass';

interface IModalHeaderProps {
  label?: string;
}

export const ModalHeader: FC<IModalHeaderProps> = ({ label }) => (
  <Flex
    flexDirection="row"
    alignItems="center"
    as="header"
    width={1}
    sx={{ minHeight: 64, borderTop: '1px solid gray', borderTopLeftRadius: 'small', borderTopRightRadius: 'small' }}
    bg="primary.100"
    p={4}
  >
    {label && (
      <Heading color="white" variant="h3">
        {label}
      </Heading>
    )}
  </Flex>
);
