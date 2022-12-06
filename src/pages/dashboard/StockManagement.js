import { Button, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
// _mock_
import { _userList } from '../../_mock';
// components
import Page from '../../components/Page';
import Iconify from '../../components/Iconify';
import { PATH_DASHBOARD } from '../../routes/paths';
import StockManagementList from '../../sections/@dashboard/tables/StockManagmentTable';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'name', label: 'Name', alignRight: false },
  { id: 'company', label: 'Company', alignRight: false },
  { id: 'role', label: 'Role', alignRight: false },
  { id: 'isVerified', label: 'Verified', alignRight: false },
  { id: 'status', label: 'Status', alignRight: false },
  { id: '' },
];

// ----------------------------------------------------------------------

export default function StockManagement() {
  return (
    <Page title="User: List">
      <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={2} marginRight={6} marginBottom={4}>
        <Button
          variant="outlined"
          component={RouterLink}
          to={`${PATH_DASHBOARD.user.root}/stockimport`}
          startIcon={<Iconify icon={'eva:plus-fill'} />}
        >
          import Product Stock
        </Button>
        <Button
          variant="outlined"
          component={RouterLink}
          to={PATH_DASHBOARD.user.newUser}
          startIcon={<Iconify icon={'eva:plus-fill'} />}
        >
          Add New Stock Detail
        </Button>
      </Stack>
      <StockManagementList tableColumn={TABLE_HEAD} tableRows={_userList} />
    </Page>
  );
}

// ----------------------------------------------------------------------
