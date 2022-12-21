// @mui
import { Stack, Switch, MenuItem } from '@mui/material';
// hooks
import useSettings from '../../hooks/useSettings';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function SettingMode() {
  const { themeMode, onChangeMode } = useSettings();
  return (
    <>
      <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={6}>
        <MenuItem>Mode</MenuItem>

        <Switch checked={themeMode === 'dark' && true} value={themeMode} onChange={onChangeMode} />
      </Stack>
    </>
  );
}
