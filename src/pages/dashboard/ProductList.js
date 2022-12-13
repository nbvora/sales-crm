import { Button, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import ProductListTable from '../../sections/@dashboard/tables/ProductListTable';
import Page from '../../components/Page';
import Iconify from '../../components/Iconify';
import { PATH_DASHBOARD } from '../../routes/paths';
import { _userList } from '../../_mock';

const TABLE_HEAD = [
  { id: 'name', label: 'Product Name', alignRight: false },
  { id: 'company', label: 'Product Price', alignRight: false },
  { id: 'role', label: 'Product Category', alignRight: false },
  { id: 'isVerified', label: 'Product HSN Code', alignRight: false },
  { id: 'status', label: 'Available Stock', alignRight: false },
  { id: 'Action', label: 'Action', alignRight: false },
];

export default function ProductList() {
  return (
    <Page title="User: Cards">
      <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={2} marginRight={6} marginBottom={4}>
        <Button
          variant="outlined"
          component={RouterLink}
          to={`${PATH_DASHBOARD.user.root}/productimport`}
          startIcon={<Iconify icon={'eva:plus-fill'} />}
        >
          Product import
        </Button>
        <Button
          variant="outlined"
          component={RouterLink}
          to={`${PATH_DASHBOARD.user.root}/addnewproduct`}
          startIcon={<Iconify icon={'eva:plus-fill'} />}
        >
          Add New Product
        </Button>
      </Stack>
      <ProductListTable tableColumn={TABLE_HEAD} tableRows={_userList} />
    </Page>
  );
}
