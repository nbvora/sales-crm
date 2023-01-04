import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
// hooks
import sagaActions from '../redux/actions';
import { dispatch } from '../redux/store';

// ----------------------------------------------------------------------

AuthGuard.propTypes = {
  children: PropTypes.node,
};

export default function AuthGuard({ children }) {
  const data = window.localStorage.getItem('user');
  const { pathname } = useLocation();
  const [requestedLocation, setRequestedLocation] = useState(null);

  useEffect(() => {
    if (data !== null) {
      dispatch({ type: sagaActions.INTIALIZED });
      dispatch({ type: sagaActions.GET_PRODUCT });
      dispatch({ type: sagaActions.GET_PRODUCT_CATEGORY });
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
      dispatch({ type: sagaActions.GET_STOCKES });
    }
  }, [data]);

  // if (!isAuthenticated) {
  //     return <Login/>
  // }

  if (requestedLocation && pathname !== requestedLocation) {
    setRequestedLocation(null);
    return <Navigate to={requestedLocation} />;
  }

  return <>{children}</>;
}
