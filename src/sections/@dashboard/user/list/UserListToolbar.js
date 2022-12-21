import PropTypes from 'prop-types';
// @mui
import { useTheme, styled } from '@mui/material/styles';
import { Toolbar, Tooltip, IconButton, Typography, InputAdornment, Button, Stack } from '@mui/material';
// components
import { Link as RouterLink } from 'react-router-dom';
import Iconify from '../../../../components/Iconify';
import InputStyle from '../../../../components/InputStyle';
// ----------------------------------------------------------------------

const RootStyle = styled(Toolbar)(({ theme }) => ({
  height: 96,
  alignItems: 'center',
  padding: theme.spacing(0, 1, 0, 3),
}));

// ----------------------------------------------------------------------

UserListToolbar.propTypes = {
  numSelected: PropTypes.number,
  filterName: PropTypes.string,
  onFilterName: PropTypes.func,
  onDeleteUsers: PropTypes.func,
  tableName: PropTypes.string,
  importButtonName: PropTypes.any,
  addButtonName: PropTypes.any,
  withImportButton: PropTypes.any,
  withAddButton: PropTypes.any,
  importButtonLink: PropTypes.string,
  addButtonLink: PropTypes.string,
};

export default function UserListToolbar({
  numSelected,
  filterName,
  onFilterName,
  onDeleteUsers,
  tableName,
  importButtonName,
  addButtonName,
  withImportButton,
  withAddButton,
  importButtonLink,
  addButtonLink,
}) {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';

  return (
    <Stack sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
      <RootStyle
        sx={{
          ...(numSelected > 0 && {
            color: isLight ? 'primary.main' : 'text.primary',
            bgcolor: isLight ? 'primary.lighter' : 'primary.dark',
          }),
        }}
      >
        {numSelected > 0 ? (
          <Typography component="div" variant="subtitle1">
            {numSelected} selected
          </Typography>
        ) : (
          <Typography variant="h4" sx={{ margin: 0 }} gutterBottom>
            {tableName}
          </Typography>
        )}

        {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton onClick={onDeleteUsers}>
              <Iconify icon={'eva:trash-2-outline'} />
            </IconButton>
          </Tooltip>
        ) : (
          <InputStyle
            stretchStart={240}
            value={filterName}
            onChange={(event) => onFilterName(event.target.value)}
            placeholder="Search user..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Iconify icon={'eva:search-fill'} sx={{ color: 'text.disabled', width: 20, height: 20 }} />
                </InputAdornment>
              ),
            }}
          />
        )}
      </RootStyle>
      <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={2} marginRight={3}>
        {withImportButton && (
          <RouterLink to={importButtonLink} style={{ textDecoration: 'none' }}>
            <Button variant="outlined" startIcon={<Iconify icon={'eva:plus-fill'} />}>
              {importButtonName}
            </Button>
          </RouterLink>
        )}
        {withAddButton && (
          <RouterLink to={addButtonLink} style={{ textDecoration: 'none' }}>
            <Button variant="outlined" startIcon={<Iconify icon={'eva:plus-fill'} />}>
              {addButtonName}
            </Button>
          </RouterLink>
        )}
      </Stack>
    </Stack>
  );
}
