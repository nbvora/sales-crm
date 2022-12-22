import EmployeeTargetTable from '../../sections/@dashboard/tables/EmployeeTargetTable';
import Page from '../../components/Page';
import { useSelector } from '../../redux/store';

const TABLE_HEAD = [
  { id: 'name', label: 'Assign By', alignRight: false },
  { id: 'company', label: 'Assign To', alignRight: false },
  { id: 'role', label: 'Designation', alignRight: false },
  { id: 'status', label: 'Month', alignRight: false },
  { id: 'id', label: 'Target Ammount', alignRight: false },
  { id: 'country', label: 'Action', alignRight: false },
];
export default function EmployeeTarget() {
  const { employee } = useSelector((state) => state.employee);

  return (
    <>
      <Page title="Employee: Employeetarget">
        <EmployeeTargetTable tableColumn={TABLE_HEAD} tableRows={employee} />
      </Page>
    </>
  );
}
