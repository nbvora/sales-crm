import { Container } from '@mui/material';
import Page from '../../components/Page';
import OrderDetailTable from '../../sections/@dashboard/tables/OrderDeatilTable';
import useSettings from '../../hooks/useSettings';
import { useSelector } from '../../redux/store';

export default function Orders() {
  const { themeStretch } = useSettings();
  const { orderDetail } = useSelector((state) => state.orders);

  const ORDER_DETAIL_HEAD = [
    { id: 1, label: 'Name', alignRight: false },
    { id: 2, label: 'Role', alignRight: false },
    { id: 3, label: 'PhoneNumber', alignRight: false },
    { id: 4, label: 'Verified', alignRight: false },
    { id: 5, label: 'Status', alignRight: false },
    { id: '' },
  ];
  return (
    <Page title="Order Detail">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <OrderDetailTable tableColumn={ORDER_DETAIL_HEAD} tableRows={orderDetail} />
      </Container>
    </Page>
  );
}
