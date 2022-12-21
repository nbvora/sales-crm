import { useEffect } from 'react';
import CustomerListTable from '../../sections/@dashboard/tables/CustomerListTable';
import Page from '../../components/Page';
import { useSelector, dispatch } from '../../redux/store';
import { getHeaderDetail } from '../../redux/slices/breadcrumbs';

const TABLE_HEAD = [
  { id: 'name', label: 'Name', alignRight: false },
  { id: 'company', label: 'Mobile', alignRight: false },
  { id: 'role', label: 'Employee Name', alignRight: false },
  { id: 'Action', label: 'Action', alignRight: false },
];

export default function GeneralCustomers() {
  const { customers } = useSelector((state) => state.customers);
  const HedareDetail = [{ title: 'StockList', path: null }];

  useEffect(() => {
    dispatch(getHeaderDetail(HedareDetail));
  });
  return (
    <Page title="General: Customers">
      <CustomerListTable tableColumn={TABLE_HEAD} tableRows={customers} />
    </Page>
  );
}
