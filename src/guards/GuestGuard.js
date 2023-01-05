import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
// hooks
import { useSelector } from '../redux/store';
// routes
import { PATH_DASHBOARD } from '../routes/paths';

// ----------------------------------------------------------------------

GuestGuard.propTypes = {
  children: PropTypes.node,
};

export default function GuestGuard({ children }) {
  const { isAuthenticated } = useSelector((state) => state.login);

  if (isAuthenticated) {
    return <Navigate to={PATH_DASHBOARD.general.app} />;
  }

  return <>{children}</>;
}
