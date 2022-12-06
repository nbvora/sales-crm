import { paramCase } from 'change-case';
import { useParams } from 'react-router-dom';
import { _userList } from '../../_mock';

import EditCategory from '../../sections/@dashboard/user/EditProductcatagory';

// ----------------------------------------------------------------------

export default function EditProductCategory() {
  const { name = '' } = useParams();
  const currentUser = _userList.find((user) => paramCase(user.name) === name);
  return (
    <>
      <EditCategory currentUser={currentUser} />
    </>
  );
}
