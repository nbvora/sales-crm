import { Container } from '@mui/material';
import Page from '../../components/Page';
import LeadTable from '../../sections/@dashboard/tables/LeadTable';
import useSettings from '../../hooks/useSettings';
import { useSelector } from '../../redux/store';

export default function Leads() {
  const { themeStretch } = useSettings();
  const { leadTable } = useSelector((state) => state.leads);

  const TABLE_HEAD = [
    { id: 'name', label: 'Name', alignRight: false },
    { id: 'role', label: 'Role', alignRight: false },
    { id: 'mobile', label: 'Mobile', alignRight: false },
    { id: 'Action', label: 'Action', alignRight: false },
  ];
  return (
    <Page title="Leads">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <LeadTable tableColumn={TABLE_HEAD} tableRows={leadTable} />
      </Container>
    </Page>
  );
}
