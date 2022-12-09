import { Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import InvoiceListTable from '../../sections/@dashboard/tables/InvoiceListTable';
import { PATH_DASHBOARD } from '../../routes/paths';
import Iconify from '../../components/Iconify';
import Page from '../../components/Page';
import { _userList } from '../../_mock';

const TABLE_HEAD = [
  { id: 'name', label: 'Product Name', alignRight: false },
  { id: 'company', label: 'Product Price', alignRight: false },
  { id: 'role', label: 'Product Category', alignRight: false },
  { id: 'isVerified', label: 'Product HSN Code', alignRight: false },
  { id: 'status', label: 'Available Stock', alignRight: false },
  { id: 'Action', label: 'Action', alignRight: false },
];

export default function BlogPosts() {
  return (
    <Page title="Blog: Posts">
      <Button
        sx={{ marginLeft: '78%', width: '181px' }}
        variant="outlined"
        component={RouterLink}
        to={`${PATH_DASHBOARD.blog.addinvoice}`}
        startIcon={<Iconify icon={'eva:plus-fill'} />}
      >
        Add New Invoice
      </Button>
      <Box sx={{ marginTop: '31px' }}>
        <InvoiceListTable tableColumn={TABLE_HEAD} tableRows={_userList} />
      </Box>
    </Page>
  );
}
