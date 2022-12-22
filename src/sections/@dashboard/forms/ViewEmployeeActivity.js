import { useEffect } from 'react';
import { _userList } from '../../../_mock';
import ViewEmployeeActivityTable from '../tables/ViewEmployeeActivityTable';
import { PATH_DASHBOARD } from '../../../routes/paths';
import { dispatch } from '../../../redux/store';
import { getHeaderDetail, getTitle } from '../../../redux/slices/breadcrumbs';

const VIEW_EMP_DETAIL_HEAD = [
  { id: 'Name', label: 'Name', alignRight: false },
  { id: 'Role', label: 'Role', alignRight: false },
  { id: 'PhoneNumber', label: 'PhoneNumber', alignRight: false },
  { id: 'Verified', label: 'Verified', alignRight: false },
  { id: 'Status', label: 'Status', alignRight: false },
  { id: 'Actions', label: 'Actions', alignRight: false },
];
export default function ViewInvoiceDeatilForm() {
  const headerDetail = [
    { title: 'EmployeeList', path: PATH_DASHBOARD.eCommerce.checkout },
    { title: 'View', path: null },
  ];
  const title = 'Employee';
  useEffect(() => {
    dispatch(getHeaderDetail(headerDetail));
    dispatch(getTitle(title));
  });
  return (
    <>
      <ViewEmployeeActivityTable
        tableColumn={VIEW_EMP_DETAIL_HEAD}
        tableRows={_userList.filter((user) => _userList.includes(user.id))}
      />
    </>
  );
}
