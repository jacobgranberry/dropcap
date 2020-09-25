import React from 'react';
import { Text, Flex, Heading } from 'rebass';
import { Logo } from '../../../atoms/logo';

export const FirstStep = () => {
  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center" minWidth={456} py={10} px={5}>
      <Flex flexDirection="column" justifyContent="center" alignItems="center" sx={{ textAlign: 'center' }}>
        <Heading mb={2}>Welcome to</Heading>
        <Logo disableLink />
        <Text mt={2}>Ready to start filling out your shelves?</Text>
      </Flex>
    </Flex>
  );
};
