import React, { FC } from 'react';
import { Flex } from 'rebass';
import { ModalFooter } from '../../atoms/modalFooter';
import { ModalHeader } from '../../atoms/modalHeader';

interface IModalLayoutProps {
  headerLabel?: string;
}

export const ModalLayout: FC<IModalLayoutProps> = ({ headerLabel, children }) => (
  <Flex bg="white" flexDirection="column" width={1} sx={{ boxShadow: 'large', borderRadius: 'small' }}>
    <ModalHeader label={headerLabel} />
    {children}
    <ModalFooter />
  </Flex>
);
