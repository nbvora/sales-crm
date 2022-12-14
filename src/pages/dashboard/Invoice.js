import { Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import InvoiceListTable from '../../sections/@dashboard/tables/InvoiceListTable';
import { PATH_DASHBOARD } from '../../routes/paths';
import Iconify from '../../components/Iconify';
import Page from '../../components/Page';
import { useSelector } from '../../redux/store';

const TABLE_HEAD = [
  { id: 'companyName', label: 'Company Name', alignRight: false },
  { id: 'invoiceNumber', label: 'Invoice Number', alignRight: false },
  { id: 'invoiceDate', label: 'Invoice Date', alignRight: false },
  { id: 'subTotalAmmount', label: 'Sub Total Ammount', alignRight: false },
  { id: 'Action', label: 'Action', alignRight: false },
];

export default function Invoice() {
  const { invoice } = useSelector((state) => state.invoice);

  return (
    <Page title="General: Invoice">
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
        <InvoiceListTable tableColumn={TABLE_HEAD} tableRows={invoice} />
      </Box>
    </Page>
  );
}
