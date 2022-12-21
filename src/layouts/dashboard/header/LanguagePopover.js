import { useState } from 'react';
// @mui
import { MenuItem, Stack, Typography } from '@mui/material';
// hooks
import useLocales from '../../../hooks/useLocales';
// components
import Image from '../../../components/Image';

// ----------------------------------------------------------------------

export default function LanguagePopover() {
  const { allLang, currentLang, onChangeLang } = useLocales();

  const [hover, setHover] = useState('');

  return (
    <>
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'row',
          width: '184px',
          justifyContent: 'space-around',
          marginTop: 2,
          marginBottom: 2,
        }}
      >
        {allLang.map((option) => (
          <MenuItem
            sx={{ padding: '0' }}
            key={option.value}
            selected={option.value === currentLang.value}
            onClick={() => {
              onChangeLang(option.value);
            }}
            onMouseOver={() => setHover(option.label)}
            onMouseLeave={() => setHover('')}
          >
            <Stack sx={{ display: 'flex', flexDirection: 'column' }}>
              <Image disabledEffect alt={option.label} src={option.icon} />
              <Typography variant="subtitle2" noWrap>
                {hover === option.label && hover}
              </Typography>
            </Stack>
          </MenuItem>
        ))}
      </Stack>
    </>
  );
}
