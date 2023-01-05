import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Tooltip from '@mui/material/Tooltip';

export default function ColorToggleButton() {
  const [alignment, setAlignment] = React.useState('');

  const handleChange = () => {
    setAlignment('');
  };

  return (
    <>
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="text alignment"
        sx={{
          border: 0,
          position: 'relative',
          left: 30,
          top: -20,
        }}
      >
        <Tooltip title="Approve" placement="top" arrow>
          <ToggleButton
            value="left"
            aria-label="left aligned"
            sx={{
              '&:hover': {
                backgroundColor: '#6c757d',
                borderColor: '#6c757d',
                boxShadow: 'none',
                color: 'white',
              },
            }}
          >
            Approve
          </ToggleButton>
        </Tooltip>
        <Tooltip title="Reject" placement="top" arrow>
          <ToggleButton
            value="center"
            aria-label="centered"
            sx={{
              '&:hover': {
                backgroundColor: '#6c757d',
                borderColor: '#6c757d',
                boxShadow: 'none',
                color: 'white',
              },
            }}
          >
            Reject
          </ToggleButton>
        </Tooltip>
      </ToggleButtonGroup>
    </>
  );
}
