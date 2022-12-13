import { Container } from '@mui/material';
import Page from '../../components/Page';
import LeadTable from '../../sections/@dashboard/tables/LeadTable';
import useSettings from '../../hooks/useSettings';
import { useSelector } from '../../redux/store';

export default function Leads() {
  const { themeStretch } = useSettings();
  const { leadTable } = useSelector((state) => state.leads);

  const TABLE_HEAD = [
    { id: 1, label: 'Name', alignRight: false },
    { id: 2, label: 'Role', alignRight: false },
    { id: 3, label: 'PhoneNumber', alignRight: false },
    { id: 4, label: 'Verified', alignRight: false },
    { id: 5, label: 'Status', alignRight: false },
    { id: 6, label: 'Actions' },
  ];
  return (
    <Page title="Leads">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <LeadTable tableColumn={TABLE_HEAD} tableRows={leadTable} />
      </Container>
    </Page>
  );
}
