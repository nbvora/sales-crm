import React from 'react';
import { Avatar } from '@mui/material';
import PropTypes from 'prop-types';

AvatarIcon.propTypes = {
  name: PropTypes.string,
};

function AvatarIcon({ name }) {
  function stringAvatar(name) {
    return {
      sx: {
        // bgcolor: stringToColor(name),
        mr: 1,
        width: '32px',
        height: '32px',
      },
      children: `${name.split(' ')[0][0]}`,
    };
  }

  return (
    <div>
      <Avatar {...stringAvatar(`${name}`)} />
    </div>
  );
}

export default AvatarIcon;
