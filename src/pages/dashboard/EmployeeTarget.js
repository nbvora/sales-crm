import { Box, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import EmployeeTargetTable from '../../sections/@dashboard/tables/EmployeeTargetTable';
import { PATH_DASHBOARD } from '../../routes/paths';
import Page from '../../components/Page';
import Iconify from '../../components/Iconify';
import { useSelector } from '../../redux/store';

const TABLE_HEAD = [
  { id: 'name', label: 'Assign By', alignRight: false },
  { id: 'company', label: 'Assign To', alignRight: false },
  { id: 'role', label: 'Designation', alignRight: false },
  { id: 'status', label: 'Month', alignRight: false },
  { id: 'id', label: 'Target Ammount', alignRight: false },
  { id: 'country', label: 'Action', alignRight: false },
];
export default function EmployeeTarget() {
  const { employee } = useSelector((state) => state.employee);

  return (
    <>
      <Page title="Employee: Employeetarget">
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
          <EmployeeTargetTable tableColumn={TABLE_HEAD} tableRows={employee} />
        </Box>
      </Page>
    </>
  );
}
