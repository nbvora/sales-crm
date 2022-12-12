import React from 'react';
import { Box } from '@mui/system';
import ViewInvoiceDeatilTable from '../tables/ViewInvoiceDetailTable';
import HeaderBreadcrumbs from '../../../components/HeaderBreadcrumbs';
import { PATH_DASHBOARD } from '../../../routes/paths';
import { _userList } from '../../../_mock';

const ORDER_VIEW_INVOICE_DETAIL_HEAD = [
  { id: 1, label: 'Name', alignRight: false },
  { id: 2, label: 'Role', alignRight: false },
  { id: 3, label: 'PhoneNumber', alignRight: false },
  { id: 4, label: 'Verified', alignRight: false },
  { id: 5, label: 'Status', alignRight: false },
  { id: '' },
];
export default function ViewInvoiceDeatilForm() {
  return (
    <>
      <HeaderBreadcrumbs heading="" links={[{ name: '', href: PATH_DASHBOARD.order.viewInvoiceDetail }]} />
      <Box sx={{ position: 'relative', top: 10 }}>
        <ViewInvoiceDeatilTable tableColumn={ORDER_VIEW_INVOICE_DETAIL_HEAD} tableRows={_userList} />
      </Box>
      {/* <Box sx={{ position: 'relative', top: 50 }}>
        <DiscussionTable tableColumn={TABLE_HEAD_D} tableRows={discussionTable} />
      </Box> */}
    </>
  );
}
