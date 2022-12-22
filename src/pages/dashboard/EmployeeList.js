import EmployeeListTable from '../../sections/@dashboard/tables/EmployeeListTable';
import Page from '../../components/Page';
import { useSelector } from '../../redux/store';

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

  return (
    <Page title="Employee: EmployeeList">
      <EmployeeListTable tableColumn={TABLE_HEAD} tableRows={employee} />
    </Page>
  );
}
