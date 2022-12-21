import ProductCategoryTable from '../../sections/@dashboard/tables/ProductCategoryTable';
import Page from '../../components/Page';
import { _userList } from '../../_mock';

const TABLE_HEAD = [
  { id: 'name', label: 'Distributor', alignRight: false },
  { id: 'Action', label: 'Action', alignRight: false },
];

export default function ProductCategory() {
  return (
    <Page title="User: Profile">
      <ProductCategoryTable tableColumn={TABLE_HEAD} tableRows={_userList} />
    </Page>
  );
}
