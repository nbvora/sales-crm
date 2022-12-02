import { Typography, Box } from '@mui/material';
import { useSelector } from '../../redux/store';
import Page from '../../components/Page';
import StockList from '../../sections/@dashboard/tables/StockListTable';
import DistributorList from '../../sections/@dashboard/tables/DistributorListTable';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'name', label: 'Distributor', alignRight: false },
  { id: 'company', label: 'Vendors', alignRight: false },
  { id: 'role', label: 'Invoice Number', alignRight: false },
  { id: 'isVerified', label: 'Invoice Date', alignRight: false },
  { id: 'status', label: 'Sub Total Amount', alignRight: false },
  { id: 'Action', label: 'Action', alignRight: false },
];
const STOCKE_HEAD = [
  { id: 'name', label: 'Vendors', alignRight: false },
  { id: 'company', label: 'Vendor Type', alignRight: false },
  { id: 'role', label: 'Total Qty', alignRight: false },
  { id: 'isVerified', label: 'Sell Qty', alignRight: false },
  { id: 'status', label: 'Remaining Qty', alignRight: false },
];

export default function GeneralDashboard() {
  const edit = false;
  const { stoks, ditributor } = useSelector((state) => state.dashboard);

  return (
    <Page title="General: App">
      <Typography sx={{ marginLeft: 4 }} variant="h4" gutterBottom>
        Stock List
      </Typography>
      <Box sx={{ marginTop: 2, marginBottom: 6 }}>
        <StockList tableColumn={STOCKE_HEAD} tableRows={stoks} edit={edit} />
      </Box>
      <Typography sx={{ marginLeft: 4 }} variant="h4" gutterBottom>
        Distributor List
      </Typography>
      <Box sx={{ marginTop: 2, marginBottom: 4 }}>
        <DistributorList tableColumn={TABLE_HEAD} tableRows={ditributor} />
      </Box>
    </Page>
  );
}
