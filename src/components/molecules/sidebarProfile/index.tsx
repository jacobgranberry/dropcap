import React from 'react';
import { Flex } from 'rebass';
import { Avatar } from '../../atoms/avatar';
import { Cog } from 'heroicons-react';
import Popup from 'reactjs-popup';

export const SidebarProfile = () => {
  return (
    <Flex width={1} mt="auto" flexDirection="row" justifyContent="space-between" alignItems="center">
      <Avatar image="https://jacobgranberry.com/static/media/profile.2c9292dd.jpg" />
      <Popup
        contentStyle={{ border: '1px solid gray' }}
        trigger={<Cog size={36} style={{ cursor: 'pointer' }} />}
        position="top right"
      >
        <div>Popup content here !!</div>
      </Popup>
    </Flex>
  );
};
