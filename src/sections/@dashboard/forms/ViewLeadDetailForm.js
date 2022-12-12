import React from 'react';
import { Box } from '@mui/system';
import { useSelector } from 'react-redux';
import DiscussionTable from '../tables/DiscussionTable';
import OrderTable from '../tables/OrderTable';
import ColorToggleButton from '../../../components/buttons/ToggleButton';
import HeaderBreadcrumbs from '../../../components/HeaderBreadcrumbs';
import { PATH_DASHBOARD } from '../../../routes/paths';

const TABLE_HEAD = [
  { id: 1, label: 'Date', alignRight: false },
  { id: 1, label: 'Order Status', alignRight: false },
  { id: 1, label: 'Order Id', alignRight: false },
  { id: 1, label: 'Employee Name', alignRight: false },
  { id: 1, label: 'Product Name', alignRight: false },
  { id: 1, label: 'Product Quantity', alignRight: false },
  { id: 1, label: 'Total Price', alignRight: false },
];
const TABLE_HEAD_D = [
  { id: 1, label: 'Date', alignRight: false },
  { id: 1, label: 'Order Status', alignRight: false },
  { id: 1, label: 'Order Id', alignRight: false },
  { id: 1, label: 'Employee Name', alignRight: false },
  { id: 1, label: 'Product Name', alignRight: false },
  { id: 1, label: 'Product Quantity', alignRight: false },
  { id: 1, label: 'Total Price', alignRight: false },
];

export default function ViewLeadDetailForm() {
  const { orderTable, discussionTable } = useSelector((state) => state.leads);

  return (
    <>
      <HeaderBreadcrumbs
        heading="Leads"
        links={[
          { name: 'Leads', href: PATH_DASHBOARD.lead.root },
          { name: 'Lead Detail', href: PATH_DASHBOARD.lead.leadDetail },
        ]}
      />
      <ColorToggleButton />
      <Box sx={{ position: 'relative', top: 10 }}>
        <OrderTable tableColumn={TABLE_HEAD} tableRows={orderTable} />
      </Box>
      <Box sx={{ position: 'relative', top: 50 }}>
        <DiscussionTable tableColumn={TABLE_HEAD_D} tableRows={discussionTable} />
      </Box>
    </>
  );
}
