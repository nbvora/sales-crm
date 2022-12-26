import { useEffect } from 'react';
import { Container } from '@mui/material';
import Page from '../../components/Page';
import OrderDetailTable from '../../sections/@dashboard/tables/OrderDeatilTable';
import useSettings from '../../hooks/useSettings';
import { useSelector, dispatch } from '../../redux/store';
import { getHeaderDetail, getTitle } from '../../redux/slices/breadcrumbs';
import LoadingScreen from '../../components/LoadingScreen';

export default function Orders() {
  const { themeStretch } = useSettings();
  const { orderDetail, isLoading } = useSelector((state) => state.orders);
  console.log(orderDetail);
  const headerDetail = [{ title: 'OrderList', path: null }];
  const title = 'Orders';
  useEffect(() => {
    dispatch(getHeaderDetail(headerDetail));
    dispatch(getTitle(title));
  });
  const ORDER_DETAIL_HEAD = [
    { id: 'name', label: 'Name', alignRight: false },
    { id: 'company', label: 'Mobile', alignRight: false },
    { id: 'role', label: 'Employee Name', alignRight: false },
    { id: 'verified', label: 'Verified', alignRight: false },
    { id: 'status', label: 'Status', alignRight: false },
    { id: 'Action', label: 'Action', alignRight: false },
  ];
  return (
    <Page title="Order Detail">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        {isLoading ? <LoadingScreen /> : <OrderDetailTable tableColumn={ORDER_DETAIL_HEAD} tableRows={orderDetail} />}
      </Container>
    </Page>
  );
}
