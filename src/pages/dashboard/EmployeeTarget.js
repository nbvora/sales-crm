import { Box, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import EmployeeTargetTable from '../../sections/@dashboard/tables/EmployeeTargetTable';
import { PATH_DASHBOARD } from '../../routes/paths';
import Page from '../../components/Page';
import { _userList } from '../../_mock';
import Iconify from '../../components/Iconify';

const TABLE_HEAD = [
  { id: 'name', label: 'Product Name', alignRight: false },
  { id: 'company', label: 'Product Price', alignRight: false },
  { id: 'role', label: 'Product Category', alignRight: false },
  { id: 'isVerified', label: 'Product HSN Code', alignRight: false },
  { id: 'status', label: 'Available Stock', alignRight: false },
  { id: 'Action', label: 'Action', alignRight: false },
];
export default function EmployeeTarget() {
  return (
    <>
      <Page title="Emplyee target">
        <Button
          sx={{ marginLeft: '78%', width: '181px' }}
          variant="outlined"
          component={RouterLink}
          to={`${PATH_DASHBOARD.eCommerce.addemployeetarget}`}
          startIcon={<Iconify icon={'eva:plus-fill'} />}
        >
          Add New Target
        </Button>
        <Box sx={{ marginTop: '31px' }}>
          <EmployeeTargetTable tableColumn={TABLE_HEAD} tableRows={_userList} />
        </Box>
      </Page>
    </>
  );
}
