import { Box } from '@mui/material';
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
      <Box>
        <StockList tableColumn={STOCKE_HEAD} tableRows={stoks} edit={edit} />
      </Box>
      <Box sx={{ marginTop: 4 }}>
        <DistributorList tableColumn={TABLE_HEAD} tableRows={ditributor} />
      </Box>
    </Page>
  );
}
