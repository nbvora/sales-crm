import InvoiceListTable from '../../sections/@dashboard/tables/InvoiceListTable';
import Page from '../../components/Page';
import { useSelector } from '../../redux/store';

const TABLE_HEAD = [
  { id: 'name', label: 'Company Name', alignRight: false },
  { id: 'company', label: 'Invoice Number', alignRight: false },
  { id: 'role', label: 'Invoice Date', alignRight: false },
  { id: 'status', label: 'Sub Total Ammount', alignRight: false },
  { id: 'id', label: 'Action', alignRight: false },
];

export default function Invoice() {
  const { invoice } = useSelector((state) => state.invoice);

  return (
    <Page title="General: Invoice">
      <InvoiceListTable tableColumn={TABLE_HEAD} tableRows={invoice} />
    </Page>
  );
}
