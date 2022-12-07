import React from 'react';
import { Box } from '@mui/system';
import { useSelector } from 'react-redux';
import DiscussionTable from '../tables/DiscussionTable';
import OrderTable from '../tables/OrderTable';
import ColorToggleButton from '../../../components/buttons/ToggleButton';

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
