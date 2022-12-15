import { Container, Button, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Iconify from '../../components/Iconify';
import { PATH_DASHBOARD } from '../../routes/paths';
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
        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          spacing={2}
          marginRight={6}
          marginBottom={4}
        >
          <Button
            variant="outlined"
            component={RouterLink}
            to={PATH_DASHBOARD.lead.leadImport}
            startIcon={<Iconify icon={'eva:plus-fill'} />}
          >
            Lead Import
          </Button>
          <Button
            variant="outlined"
            component={RouterLink}
            to={PATH_DASHBOARD.lead.newLeads}
            startIcon={<Iconify icon={'eva:plus-fill'} />}
          >
            Add New Lead
          </Button>
        </Stack>
        <LeadTable tableColumn={TABLE_HEAD} tableRows={leadTable} />
      </Container>
    </Page>
  );
}
