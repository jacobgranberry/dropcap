import React from 'react';
import { Flex } from 'rebass';
import { Avatar } from '../../atoms/avatar';
import { Cog } from 'heroicons-react';

export const SidebarProfile = () => {
  return (
    <Flex width={1} mt="auto" flexDirection="row" justifyContent="space-between" alignItems="center">
      <Avatar image="https://jacobgranberry.com/static/media/profile.2c9292dd.jpg" />
      <Cog size={36} />
    </Flex>
  );
};
