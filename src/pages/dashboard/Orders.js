import { Container } from '@mui/material';
import Page from '../../components/Page';
import OrderDetailTable from '../../sections/@dashboard/tables/OrderDeatilTable';
import useSettings from '../../hooks/useSettings';
import { useSelector } from '../../redux/store';

export default function Orders() {
  const { themeStretch } = useSettings();
  const { orderDetail } = useSelector((state) => state.orders);

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
        <OrderDetailTable tableColumn={ORDER_DETAIL_HEAD} tableRows={orderDetail} />
      </Container>
    </Page>
  );
}
