import { Box } from '@mui/material';
import { useEffect } from 'react';
import { useSelector, dispatch } from '../../redux/store';
import Page from '../../components/Page';
import Tostify from '../../components/Tostify';
import StockList from '../../sections/@dashboard/tables/StockListTable';
import DistributorList from '../../sections/@dashboard/tables/DistributorListTable';
import { getHeaderDetail, getTitle } from '../../redux/slices/breadcrumbs';
import LoadingScreen from '../../components/LoadingScreen';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'name', label: 'Distributor', alignRight: false },
  { id: 'company', label: 'Vendors', alignRight: false },
  { id: 'role', label: 'Invoice Number', alignRight: false },
  { id: 'isVerified', label: 'Invoice Date', alignRight: false },
  { id: 'status', label: 'Sub Total Amount', alignRight: false },
];
const STOCKE_HEAD = [
  { id: 'role', label: 'Vendors', alignRight: false },
  { id: 'Vendor Type', label: 'Vendor Type', alignRight: false },
  { id: 'Total Qty', label: 'Total Qty', alignRight: false },
  { id: 'Sell Qty', label: 'Sell Qty', alignRight: false },
  { id: 'Remaining Qty', label: 'Remaining Qty', alignRight: false },
];

export default function GeneralDashboard() {
  const edit = false;
  const { stocks, ditributor, isLoading, error } = useSelector((state) => state.dashboard);

  useEffect(() => {
    const headerDetail = [{ title: 'DistributorList & StockList', path: null }];
    const title = 'Dashboard';
    dispatch(getHeaderDetail(headerDetail));
    dispatch(getTitle(title));
  }, []);

  return (
    <Page title="General: App">
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Tostify status={error} />
          <Box>
            <StockList tableColumn={STOCKE_HEAD} tableRows={stocks} edit={edit} />
          </Box>
          <Box sx={{ marginTop: 4 }}>
            <DistributorList tableColumn={TABLE_HEAD} tableRows={ditributor} />
          </Box>
        </>
      )}
    </Page>
  );
}
