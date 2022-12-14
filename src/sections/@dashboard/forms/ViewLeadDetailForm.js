import React from 'react';
import { Box } from '@mui/system';
import { useSelector } from 'react-redux';
import DiscussionTable from '../tables/DiscussionTable';
import OrderTable from '../tables/OrderTable';
import { PATH_DASHBOARD } from '../../../routes/paths';
import HeaderBreadcrumbs from '../../../components/HeaderBreadcrumbs';
import ColorToggleButton from '../../../components/buttons/ToggleButton';

const TABLE_HEAD = [
  { id: 1, label: 'Date', alignRight: false },
  { id: 2, label: 'Order Status', alignRight: false },
  { id: 3, label: 'Order Id', alignRight: false },
  { id: 4, label: 'Employee Name', alignRight: false },
  { id: 5, label: 'Product Name', alignRight: false },
  { id: 6, label: 'Product Quantity', alignRight: false },
  { id: 7, label: 'Total Price', alignRight: false },
];
const TABLE_HEAD_D = [
  { id: 1, label: 'Date', alignRight: false },
  { id: 2, label: 'Order Status', alignRight: false },
  { id: 3, label: 'Order Id', alignRight: false },
  { id: 4, label: 'Employee Name', alignRight: false },
  { id: 5, label: 'Product Name', alignRight: false },
  { id: 6, label: 'Product Quantity', alignRight: false },
  { id: 7, label: 'Total Price', alignRight: false },
];

export default function ViewLeadDetailForm() {
  const { orderTable, discussionTable } = useSelector((state) => state.leads);
  return (
    <>
      <ColorToggleButton />
      <HeaderBreadcrumbs
        heading="Leads"
        links={[
          { name: 'Leads', href: PATH_DASHBOARD.lead.root },
          { name: 'View Lead Detail Form', href: PATH_DASHBOARD.lead.viewLeadDetail },
        ]}
      />
      {/* In table rows data is not going through redux-saga flow because of initial push for merge */}
      <Box sx={{ position: 'relative', top: 10 }}>
        <OrderTable tableColumn={TABLE_HEAD} tableRows={orderTable} />
      </Box>
      <Box sx={{ position: 'relative', top: 50 }}>
        <DiscussionTable tableColumn={TABLE_HEAD_D} tableRows={discussionTable} />
      </Box>
    </>
  );
}
