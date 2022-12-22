import React from 'react';
import { _userList } from '../../../_mock';
import ViewEmployeeActivityTable from '../tables/ViewEmployeeActivityTable';

const VIEW_EMP_DETAIL_HEAD = [
  { id: 'Name', label: 'Name', alignRight: false },
  { id: 'Role', label: 'Role', alignRight: false },
  { id: 'PhoneNumber', label: 'PhoneNumber', alignRight: false },
  { id: 'Verified', label: 'Verified', alignRight: false },
  { id: 'Status', label: 'Status', alignRight: false },
  { id: 'Actions', label: 'Actions', alignRight: false },
];
export default function ViewInvoiceDeatilForm() {
  return (
    <>
      <ViewEmployeeActivityTable
        tableColumn={VIEW_EMP_DETAIL_HEAD}
        tableRows={_userList.filter((user) => _userList.includes(user.id))}
      />
    </>
  );
}
