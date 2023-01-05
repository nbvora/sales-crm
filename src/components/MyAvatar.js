// hooks
import { useSelector } from '../redux/store';
// utils
import createAvatar from '../utils/createAvatar';
//
import Avatar from './Avatar';

// ----------------------------------------------------------------------

export default function MyAvatar({ ...other }) {
  const { user } = useSelector((state) => state.login);
  return (
    <Avatar
      src={user?.photoURL}
      alt={user?.email}
      color={user?.name ? 'default' : createAvatar(user?.email).color}
      {...other}
    >
      {createAvatar(user?.email).name}
    </Avatar>
  );
}
