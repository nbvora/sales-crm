import { useEffect } from 'react';
import ViewInvoiceDeatilTable from '../tables/ViewInvoiceDetailTable';
import { _userList } from '../../../_mock';
import { dispatch } from '../../../redux/store';
import { PATH_DASHBOARD } from '../../../routes/paths';
import { getHeaderDetail, getTitle } from '../../../redux/slices/breadcrumbs';

const ORDER_VIEW_INVOICE_DETAIL_HEAD = [
  { id: 'Name', label: 'Name', alignRight: false },
  { id: 'Role', label: 'Role', alignRight: false },
  { id: 'PhoneNumber', label: 'PhoneNumber', alignRight: false },
  { id: 'Verified', label: 'Verified', alignRight: false },
  { id: 'Status', label: 'Status', alignRight: false },
  { id: 'Actions', label: 'Actions', alignRight: false },
];
export default function ViewInvoiceDeatilForm() {
  useEffect(() => {
    const headerDetail = [
      { title: 'OrderList', path: PATH_DASHBOARD.order.root },
      { title: 'View', path: null },
    ];
    const title = 'Orders';
    dispatch(getHeaderDetail(headerDetail));
    dispatch(getTitle(title));
  }, []);
  return (
    <>
      <ViewInvoiceDeatilTable
        tableColumn={ORDER_VIEW_INVOICE_DETAIL_HEAD}
        tableRows={_userList.filter((user) => _userList.includes(user.id))}
      />
    </>
  );
}
