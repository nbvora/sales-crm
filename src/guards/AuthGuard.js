import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
// hooks
import sagaActions from '../redux/actions';
import { dispatch, useSelector } from '../redux/store';
// pages
import Login from '../pages/auth/Login';

// ----------------------------------------------------------------------

AuthGuard.propTypes = {
  children: PropTypes.node,
};

export default function AuthGuard({ children }) {
  const { isAuthenticated, user } = useSelector((state) => state.login);
  const { pathname } = useLocation();
  const [requestedLocation, setRequestedLocation] = useState(null);

  useEffect(() => {
    dispatch({ type: sagaActions.INTIALIZED });
    dispatch({ type: sagaActions.GET_STOCKES });
    dispatch({ type: sagaActions.GET_DISTRIBUTERS });
    dispatch({ type: sagaActions.GET_VENDORS });
    dispatch({ type: sagaActions.GET_CUSTOMERS });
    dispatch({ type: sagaActions.GET_EMPLOYEE });
    dispatch({ type: sagaActions.GET_INVOICE });
    dispatch({ type: sagaActions.LEADTABLE_SAGA });
    dispatch({ type: sagaActions.ORDERTABLE_SAGA });
    dispatch({ type: sagaActions.DISCUSSIONTABLE_SAGA });
    dispatch({ type: sagaActions.ORDERDETAIL_SAGA });
    dispatch({ type: sagaActions.VIEWINVOICEDETAIL_SAGA });
  }, []);

  if (!user) {
    return <Login />;
  }
  if (!isAuthenticated) {
    if (pathname !== requestedLocation) {
      setRequestedLocation(pathname);
    }
    return <Login />;
  }

  if (requestedLocation && pathname !== requestedLocation) {
    setRequestedLocation(null);
    return <Navigate to={requestedLocation} />;
  }

  return <>{children}</>;
}
