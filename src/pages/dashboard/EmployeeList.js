import { Box, Button, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import EmployeeListTable from '../../sections/@dashboard/tables/EmployeeListTable';
import { PATH_DASHBOARD } from '../../routes/paths';
import Page from '../../components/Page';
import Iconify from '../../components/Iconify';
import { useSelector } from '../../redux/store';

const TABLE_HEAD = [
  { id: 'productName', label: 'Product Name', alignRight: false },
  { id: 'employeeCode', label: 'Employee Code', alignRight: false },
  { id: 'designation', label: 'Designation', alignRight: false },
  { id: 'location', label: 'Location', alignRight: false },
  { id: 'state', label: 'State', alignRight: false },
  { id: 'mobile', label: 'Mobile', alignRight: false },
  { id: 'Action', label: 'Action', alignRight: false },
];

export default function EmployeeList() {
  const { employee } = useSelector((state) => state.employee);

  return (
    <Page title="Employee: EmployeeList">
      <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={2} marginRight={6} marginBottom={4}>
        <Button
          variant="outlined"
          component={RouterLink}
          to={`${PATH_DASHBOARD.eCommerce.employeeimport}`}
          startIcon={<Iconify icon={'eva:plus-fill'} />}
        >
          Employee Import
        </Button>
        <Button
          variant="outlined"
          component={RouterLink}
          to={`${PATH_DASHBOARD.eCommerce.addemployee}`}
          startIcon={<Iconify icon={'eva:plus-fill'} />}
        >
          Add New Employee
        </Button>
      </Stack>
      <Box sx={{ marginTop: '31px' }}>
        <EmployeeListTable tableColumn={TABLE_HEAD} tableRows={employee} />
      </Box>
    </Page>
  );
}
