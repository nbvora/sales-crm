import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// slices
import productReducer from './slices/product';
import loginReducer from './slices/login';
import dashboardReducer from './slices/dashboard';
import vendorsReducer from './slices/vendors';
import customersReducer from './slices/customers';
import employeeReducer from './slices/employee';
import invoiceReducer from './slices/invoice';

import leadsReducer from './slices/leadslice';
import ordersReducer from './slices/orderDetail';
import changepasswordReducer from './slices/changepassword';
import uploadFileReducer from './slices/uploadFile';
import breadcrumbsReducer from './slices/breadcrumbs';
import inventoryReducer from './slices/inventory';

// ----------------------------------------------------------------------

const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: [],
};

const productPersistConfig = {
  key: 'product',
  storage,
  keyPrefix: 'redux-',
  whitelist: ['sortBy', 'checkout'],
};

const rootReducer = combineReducers({
  product: persistReducer(productPersistConfig, productReducer),
  login: loginReducer,
  dashboard: dashboardReducer,
  vendors: vendorsReducer,
  customers: customersReducer,
  employee: employeeReducer,
  invoice: invoiceReducer,
  leads: leadsReducer,
  orders: ordersReducer,
  changepassword: changepasswordReducer,
  uploadFile: uploadFileReducer,
  breadcrumbs: breadcrumbsReducer,
  inventory: inventoryReducer,
});

export { rootPersistConfig, rootReducer };
