import { Button, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import CustomerListTable from '../../sections/@dashboard/tables/CustomerListTable';
import { PATH_DASHBOARD } from '../../routes/paths';
import Iconify from '../../components/Iconify';
import Page from '../../components/Page';
import { useSelector } from '../../redux/store';

const TABLE_HEAD = [
  { id: 'name', label: 'Name', alignRight: false },
  { id: 'company', label: 'Mobile', alignRight: false },
  { id: 'role', label: 'Employee Name', alignRight: false },
  { id: 'Action', label: 'Action', alignRight: false },
];

export default function GeneralCustomers() {
  const { customers } = useSelector((state) => state.customers);

  return (
    <Page title="General: Customers">
      <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={2} marginRight={6} marginBottom={4}>
        <Button
          variant="outlined"
          component={RouterLink}
          to={`${PATH_DASHBOARD.analytics.customerimport}`}
          startIcon={<Iconify icon={'eva:plus-fill'} />}
        >
          Customer Import
        </Button>
        <Button
          variant="outlined"
          component={RouterLink}
          to={`/dashboard${PATH_DASHBOARD.analytics.addcustomer}`}
          startIcon={<Iconify icon={'eva:plus-fill'} />}
        >
          Add New Customer
        </Button>
      </Stack>
      <CustomerListTable tableColumn={TABLE_HEAD} tableRows={customers} />
    </Page>
  );
}
