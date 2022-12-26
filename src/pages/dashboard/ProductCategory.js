import { useEffect } from 'react';
import ProductCategoryTable from '../../sections/@dashboard/tables/ProductCategoryTable';
import Page from '../../components/Page';
import { _userList } from '../../_mock';
import { dispatch, useSelector } from '../../redux/store';
import { getHeaderDetail, getTitle } from '../../redux/slices/breadcrumbs';
import LoadingScreen from '../../components/LoadingScreen';

const TABLE_HEAD = [
  { id: 'name', label: 'Distributor', alignRight: false },
  { id: 'Action', label: 'Action', alignRight: false },
];

export default function ProductCategory() {
  const { productCategory, isLoading } = useSelector((state) => state.inventory);

  const headerDetail = [{ title: 'ProductCategory', path: null }];
  const title = 'Inventory-Managment';

  useEffect(() => {
    dispatch(getHeaderDetail(headerDetail));
    dispatch(getTitle(title));
  });
  return (
    <Page title="User: Profile">
      {isLoading ? <LoadingScreen /> : <ProductCategoryTable tableColumn={TABLE_HEAD} tableRows={productCategory} />}
    </Page>
  );
}
