import { useEffect } from 'react';
import { Container } from '@mui/material';
import Page from '../../components/Page';
import LeadTable from '../../sections/@dashboard/tables/LeadTable';
import useSettings from '../../hooks/useSettings';
import { useSelector, dispatch } from '../../redux/store';
import { getHeaderDetail, getTitle } from '../../redux/slices/breadcrumbs';
import LoadingScreen from '../../components/LoadingScreen';

export default function Leads() {
  const { themeStretch } = useSettings();
  const { leadTable, isLoading } = useSelector((state) => state.leads);

  const headerDetail = [{ title: 'LeadList', path: null }];
  const title = 'Leads';

  useEffect(() => {
    dispatch(getHeaderDetail(headerDetail));
    dispatch(getTitle(title));
  });
  const TABLE_HEAD = [
    { id: 'name', label: 'Name', alignRight: false },
    { id: 'role', label: 'Role', alignRight: false },
    { id: 'mobile', label: 'Mobile', alignRight: false },
    { id: 'Action', label: 'Action', alignRight: false },
  ];

  return (
    <Page title="Leads">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        {isLoading ? <LoadingScreen /> : <LeadTable tableColumn={TABLE_HEAD} tableRows={leadTable} />}
      </Container>
    </Page>
  );
}
