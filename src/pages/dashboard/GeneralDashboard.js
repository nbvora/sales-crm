import { Box } from '@mui/material';
import { useEffect } from 'react';
import { useSelector, dispatch } from '../../redux/store';
import Page from '../../components/Page';

import StockList from '../../sections/@dashboard/tables/StockListTable';
import DistributorList from '../../sections/@dashboard/tables/DistributorListTable';
import { getHeaderDetail } from '../../redux/slices/breadcrumbs';

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
  const HedareDetail = [{ title: 'DistributorList & StockList', path: null }];

  useEffect(() => {
    dispatch(getHeaderDetail(HedareDetail));
  });
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
