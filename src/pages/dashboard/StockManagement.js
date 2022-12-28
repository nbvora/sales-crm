import { useEffect } from 'react';
// components
import Page from '../../components/Page';
import { dispatch, useSelector } from '../../redux/store';
import StockManagementList from '../../sections/@dashboard/tables/StockManagmentTable';
import { getHeaderDetail, getTitle } from '../../redux/slices/breadcrumbs';

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
  const { stockManagment } = useSelector((state) => state.inventory);

  const headerDetail = [{ title: 'StockList', path: null }];
  const title = 'Inventory-Managment';
  useEffect(() => {
    dispatch(getHeaderDetail(headerDetail));
    dispatch(getTitle(title));
  });
  return (
    <Page title="User: StockList">
      <StockManagementList tableColumn={TABLE_HEAD} tableRows={stockManagment} />
    </Page>
  );
}

// ----------------------------------------------------------------------
