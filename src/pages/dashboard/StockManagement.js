import { useEffect } from 'react';
// _mock_
import { _userList } from '../../_mock';
// components
import Page from '../../components/Page';
import { dispatch } from '../../redux/store';
import StockManagementList from '../../sections/@dashboard/tables/StockManagmentTable';
import { getHeaderDetail } from '../../redux/slices/breadcrumbs';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'name', label: 'Name', alignRight: false },
  { id: 'company', label: 'Company', alignRight: false },
  { id: 'role', label: 'Role', alignRight: false },
  { id: 'isVerified', label: 'Verified', alignRight: false },
  { id: 'status', label: 'Status', alignRight: false },
  { id: '' },
];

// ----------------------------------------------------------------------

export default function StockManagement() {
  const HedareDetail = [{ title: 'StockList', path: null }];

  useEffect(() => {
    dispatch(getHeaderDetail(HedareDetail));
  });
  return (
    <Page title="User: List">
      <StockManagementList tableColumn={TABLE_HEAD} tableRows={_userList} />
    </Page>
  );
}

// ----------------------------------------------------------------------
