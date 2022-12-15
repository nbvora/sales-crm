import React from 'react';
import { Box } from '@mui/system';
import ViewInvoiceDeatilTable from '../tables/ViewInvoiceDetailTable';
import HeaderBreadcrumbs from '../../../components/HeaderBreadcrumbs';
import { PATH_DASHBOARD } from '../../../routes/paths';
import { _userList } from '../../../_mock';

const ORDER_VIEW_INVOICE_DETAIL_HEAD = [
  { id: 'Name', label: 'Name', alignRight: false },
  { id: 'Role', label: 'Role', alignRight: false },
  { id: 'PhoneNumber', label: 'PhoneNumber', alignRight: false },
  { id: 'Verified', label: 'Verified', alignRight: false },
  { id: 'Status', label: 'Status', alignRight: false },
  { id: 'Actions', label: 'Actions', alignRight: false },
];
export default function ViewInvoiceDeatilForm() {
  return (
    <>
      <HeaderBreadcrumbs heading="" links={[{ name: '', href: PATH_DASHBOARD.order.viewInvoiceDetail }]} />
      <Box sx={{ position: 'relative', top: 10 }}>
        <ViewInvoiceDeatilTable
          tableColumn={ORDER_VIEW_INVOICE_DETAIL_HEAD}
          tableRows={_userList.filter((user) => _userList.includes(user.id))}
        />
      </Box>
    </>
  );
}
