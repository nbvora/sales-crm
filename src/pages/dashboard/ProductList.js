import { useEffect } from 'react';
import ProductListTable from '../../sections/@dashboard/tables/ProductListTable';
import Page from '../../components/Page';
import { dispatch, useSelector } from '../../redux/store';
import { _userList } from '../../_mock';
import { getHeaderDetail, getTitle } from '../../redux/slices/breadcrumbs';
import LoadingScreen from '../../components/LoadingScreen';

const TABLE_HEAD = [
  { id: 'name', label: 'Product Name', alignRight: false },
  { id: 'company', label: 'Product Price', alignRight: false },
  { id: 'role', label: 'Product Category', alignRight: false },
  { id: 'isVerified', label: 'Product HSN Code', alignRight: false },
  { id: 'status', label: 'Available Stock', alignRight: false },
  { id: 'Action', label: 'Action', alignRight: false },
];

export default function ProductList() {
  const { inventory, isLoading } = useSelector((state) => state.inventory);

  const headerDetail = [{ title: 'ProductList', path: null }];
  const title = 'Inventory-Managment';

  useEffect(() => {
    dispatch(getHeaderDetail(headerDetail));
    dispatch(getTitle(title));
  });
  return (
    <Page title="User: Cards">
      {isLoading ? <LoadingScreen /> : <ProductListTable tableColumn={TABLE_HEAD} tableRows={inventory} />}
    </Page>
  );
}
