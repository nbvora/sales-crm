import React from 'react';
import { Box } from '@mui/system';
import { useSelector } from 'react-redux';
import DiscussionTable from '../tables/DiscussionTable';
import OrderTable from '../tables/OrderTable';

const TABLE_HEAD = [
  { id: 'name', label: 'Name', alignRight: false },
  { id: 'role', label: 'Role', alignRight: false },
  { id: 'mobile', label: 'Mobile', alignRight: false },
  { id: 'verified', label: 'Verified', alignRight: false },
  { id: 'status', label: 'Status', alignRight: false },
  { id: 'Action', label: 'Action', alignRight: false },
];
const TABLE_HEAD_D = [
  { id: 'name', label: 'Name', alignRight: false },
  { id: 'role', label: 'Role', alignRight: false },
  { id: 'mobile', label: 'Mobile', alignRight: false },
  { id: 'verified', label: 'Verified', alignRight: false },
  { id: 'status', label: 'Status', alignRight: false },
  { id: 'Action', label: 'Action', alignRight: false },
];

export default function ViewLeadDetailForm() {
  const { orderTable, discussionTable } = useSelector((state) => state.leads);
  return (
    <>
      <Box sx={{ position: 'relative', top: 10 }}>
        <OrderTable tableColumn={TABLE_HEAD} tableRows={orderTable} />
      </Box>
      <Box sx={{ position: 'relative', top: 50 }}>
        <DiscussionTable tableColumn={TABLE_HEAD_D} tableRows={discussionTable} />
      </Box>
    </>
  );
}
