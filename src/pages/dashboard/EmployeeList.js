import { useEffect } from 'react';
import EmployeeListTable from '../../sections/@dashboard/tables/EmployeeListTable';
import Page from '../../components/Page';
import { useSelector, dispatch } from '../../redux/store';
import { getHeaderDetail, getTitle } from '../../redux/slices/breadcrumbs';

const TABLE_HEAD = [
  { id: 'name', label: 'Product Name', alignRight: false },
  { id: 'company', label: 'Employee Code', alignRight: false },
  { id: 'role', label: 'Designation', alignRight: false },
  { id: 'status', label: 'Location', alignRight: false },
  { id: 'id', label: 'State', alignRight: false },
  { id: 'country', label: 'Mobile', alignRight: false },
  { id: 'email', label: 'Action', alignRight: false },
];

export default function EmployeeList() {
  const { employee } = useSelector((state) => state.employee);

  useEffect(() => {
    const headerDetail = [{ title: 'EmployeeList', path: null }];
    const title = 'Employee';
    dispatch(getHeaderDetail(headerDetail));
    dispatch(getTitle(title));
  }, []);
  return (
    <Page title="Employee: EmployeeList">
      <EmployeeListTable tableColumn={TABLE_HEAD} tableRows={employee} />
    </Page>
  );
}
