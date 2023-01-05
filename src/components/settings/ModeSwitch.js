import * as React from 'react';
import { Grid, CardActionArea, RadioGroup } from '@mui/material';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import useSettings from '../../hooks/useSettings';
import { BoxMask } from '.';
import Iconify from '../Iconify';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function ThemeMode() {
  const { themeMode, onChangeMode } = useSettings();

  const BoxStyle = styled(CardActionArea)(({ theme }) => ({
    height: 30,
    display: 'flex',
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.text.disabled,
    border: `solid 1px ${theme.palette.grey[500_12]}`,
    borderRadius: Number(theme.shape.borderRadius) * 1.25,
  }));
  return (
    <RadioGroup name="themeMode" value={themeMode} onChange={onChangeMode}>
      <Grid sx={{ display: 'flex' }}>
        {['light', 'dark'].map((mode, index) => {
          const isSelected = themeMode === mode;

          return (
            <Grid key={mode} item xs={6}>
              <BoxStyle
                sx={{
                  bgcolor: mode === 'light' ? 'common.white' : 'grey.200',
                  ...(isSelected && {
                    color: 'primary.main',
                    boxShadow: (theme) => theme.customShadows.z20,
                  }),
                  marginRight: 1,
                }}
              >
                <Iconify icon={index === 0 ? 'ph:sun-duotone' : 'ph:moon-duotone'} width={20} height={20} />
                <BoxMask value={mode} />
              </BoxStyle>
            </Grid>
          );
        })}
      </Grid>
    </RadioGroup>
  );
}

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <ThemeMode />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
