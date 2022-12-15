import React from 'react';
import { Box } from '@mui/system';
import { useSelector } from 'react-redux';
import { Stack } from '@mui/material';
import DiscussionTable from '../tables/DiscussionTable';
import OrderTable from '../tables/OrderTable';
import { PATH_DASHBOARD } from '../../../routes/paths';
import ColorToggleButton from '../../../components/buttons/ToggleButton';

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
