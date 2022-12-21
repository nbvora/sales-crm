import { Box, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ProductCategoryTable from '../../sections/@dashboard/tables/ProductCategoryTable';
import Page from '../../components/Page';
import { _userList } from '../../_mock';
import { PATH_DASHBOARD } from '../../routes/paths';
import Iconify from '../../components/Iconify';

const TABLE_HEAD = [
  { id: 'name', label: 'Distributor', alignRight: false },
  { id: 'Action', label: 'Action', alignRight: false },
];

export default function ProductCategory() {
  return (
    <Page title="User: Profile">
      <Button
        sx={{ marginLeft: '78%', width: '181px' }}
        variant="outlined"
        component={RouterLink}
        to={`${PATH_DASHBOARD.user.profile}/add`}
        startIcon={<Iconify icon={'eva:plus-fill'} />}
      >
        Add New Category
      </Button>
      <Box sx={{ marginTop: '31px' }}>
        <ProductCategoryTable tableColumn={TABLE_HEAD} tableRows={_userList} />
      </Box>
    </Page>
  );
}
