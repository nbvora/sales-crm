import { Button, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import VendorsList from '../../sections/@dashboard/tables/VendorsListTable';
import { PATH_DASHBOARD } from '../../routes/paths';
import Iconify from '../../components/Iconify';
import Page from '../../components/Page';
import { _userList } from '../../_mock';
import { useSelector } from '../../redux/store';

const TABLE_HEAD = [
  { id: 'name', label: 'Name', alignRight: false },
  { id: 'company', label: 'Company', alignRight: false },
  { id: 'role', label: 'Role', alignRight: false },
  { id: 'isVerified', label: 'Verified', alignRight: false },
  { id: 'status', label: 'Status', alignRight: false },
  { id: 'Action', label: 'Action', alignRight: false },
];

export default function GeneralVendors() {
  const { vendors } = useSelector((state) => state.vendors);

  return (
    <Page title="General: Vendors">
      <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={2} marginRight={6} marginBottom={4}>
        <Button
          variant="outlined"
          component={RouterLink}
          to={`/dashboard${PATH_DASHBOARD.vendor.vendorimport}`}
          startIcon={<Iconify icon={'eva:plus-fill'} />}
        >
          Vendor Import
        </Button>
        <Button
          variant="outlined"
          component={RouterLink}
          to={`/dashboard${PATH_DASHBOARD.vendor.addvendor}`}
          startIcon={<Iconify icon={'eva:plus-fill'} />}
        >
          Add New Vendor
        </Button>
      </Stack>
      <VendorsList tableColumn={TABLE_HEAD} tableRows={vendors} />
    </Page>
  );
}
