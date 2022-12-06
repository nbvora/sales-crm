import { paramCase } from 'change-case';
import { useParams, useLocation } from 'react-router-dom';
// @mui
// import { Container } from '@mui/material';
// // routes
// import { PATH_DASHBOARD } from '../../routes/paths';
// hooks
// import useSettings from '../../hooks/useSettings';
// _mock_
import { _userList } from '../../_mock';
// components
import Page from '../../components/Page';
// import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
// sections
import EditProduct from '../../sections/@dashboard/user/EditProduct';

// ----------------------------------------------------------------------

export default function UserCreate() {
  const { pathname } = useLocation();
  const { name = '' } = useParams();
  const isEdit = pathname.includes('edit');

  const currentUser = _userList.find((user) => paramCase(user.name) === name);

  return (
    <Page title="User: Create a new user">
      <EditProduct isEdit={isEdit} currentUser={currentUser} />
    </Page>
  );
}
