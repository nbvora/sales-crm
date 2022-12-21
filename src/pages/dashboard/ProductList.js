import ProductListTable from '../../sections/@dashboard/tables/ProductListTable';
import Page from '../../components/Page';
import { _userList } from '../../_mock';

const TABLE_HEAD = [
  { id: 'name', label: 'Product Name', alignRight: false },
  { id: 'company', label: 'Product Price', alignRight: false },
  { id: 'role', label: 'Product Category', alignRight: false },
  { id: 'isVerified', label: 'Product HSN Code', alignRight: false },
  { id: 'status', label: 'Available Stock', alignRight: false },
  { id: 'Action', label: 'Action', alignRight: false },
];

export default function ProductList() {
  return (
    <Page title="User: Cards">
      <ProductListTable tableColumn={TABLE_HEAD} tableRows={_userList} />
    </Page>
  );
}
