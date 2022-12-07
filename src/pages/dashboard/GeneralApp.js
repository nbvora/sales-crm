import Page from '../../components/Page';
import CommonTable from './CommonTable';
import { _userList } from '../../_mock';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 1, label: 'Name', alignRight: false },
  { id: 2, label: 'Company', alignRight: false },
  { id: 3, label: 'Role', alignRight: false },
  { id: 4, label: 'Verified', alignRight: false },
  { id: 5, label: 'Status', alignRight: false },
  { id: '' },
];

export default function GeneralApp() {
  return (
    <Page title="General: App">
      <CommonTable tableColumn={TABLE_HEAD} tableRows={_userList} />
    </Page>
  );
}
