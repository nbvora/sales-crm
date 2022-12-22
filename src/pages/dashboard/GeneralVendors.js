import VendorsList from '../../sections/@dashboard/tables/VendorsListTable';
import Page from '../../components/Page';
import { useSelector } from '../../redux/store';

const TABLE_HEAD = [
  { id: 'name', label: 'Name', alignRight: false },
  { id: 'role', label: 'Role', alignRight: false },
  { id: 'company', label: 'Company', alignRight: false },
  { id: 'mobile', label: 'Mobile', alignRight: false },
  { id: 'Action', label: 'Action', alignRight: false },
];

export default function GeneralVendors() {
  const { vendors } = useSelector((state) => state.vendors);

  return (
    <Page title="General: Vendors">
      <VendorsList tableColumn={TABLE_HEAD} tableRows={vendors} />
    </Page>
  );
}
