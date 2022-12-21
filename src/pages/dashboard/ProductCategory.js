import { useEffect } from 'react';
import ProductCategoryTable from '../../sections/@dashboard/tables/ProductCategoryTable';
import Page from '../../components/Page';
import { _userList } from '../../_mock';
import { dispatch } from '../../redux/store';
import { getHeaderDetail } from '../../redux/slices/breadcrumbs';

const TABLE_HEAD = [
  { id: 'name', label: 'Distributor', alignRight: false },
  { id: 'Action', label: 'Action', alignRight: false },
];

export default function ProductCategory() {
  const HedareDetail = [{ title: 'ProductCategory', path: null }];

  useEffect(() => {
    dispatch(getHeaderDetail(HedareDetail));
  });
  return (
    <Page title="User: Profile">
      <ProductCategoryTable tableColumn={TABLE_HEAD} tableRows={_userList} />
    </Page>
  );
}
