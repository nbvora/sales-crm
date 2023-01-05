import { useEffect } from 'react';
import { Box } from '@mui/system';
import { useSelector, dispatch } from '../../../redux/store';
import DiscussionTable from '../tables/DiscussionTable';
import OrderTable from '../tables/OrderTable';
import { PATH_DASHBOARD } from '../../../routes/paths';
import { getHeaderDetail, getTitle } from '../../../redux/slices/breadcrumbs';

const TABLE_HEAD = [
  { id: 'name', label: 'Name', alignRight: false },
  { id: 'role', label: 'Role', alignRight: false },
  { id: 'mobile', label: 'Mobile', alignRight: false },
  { id: 'verified', label: 'Verified', alignRight: false },
  { id: 'status', label: 'Status', alignRight: false },
];
const TABLE_HEAD_D = [
  { id: 'name', label: 'Name', alignRight: false },
  { id: 'role', label: 'Role', alignRight: false },
  { id: 'mobile', label: 'Mobile', alignRight: false },
  { id: 'verified', label: 'Verified', alignRight: false },
  { id: 'status', label: 'Status', alignRight: false },
];

export default function ViewLeadDetailForm() {
  const { orderTable, discussionTable } = useSelector((state) => state.leads);
  useEffect(() => {
    const headerDetail = [
      { title: 'LeadList', path: PATH_DASHBOARD.lead.root },
      { title: 'View', path: null },
    ];
    const title = 'Leads';
    dispatch(getHeaderDetail(headerDetail));
    dispatch(getTitle(title));
  }, []);

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
