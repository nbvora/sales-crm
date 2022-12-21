import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// slices
import mailReducer from './slices/mail';
import chatReducer from './slices/chat';
import productReducer from './slices/product';
import calendarReducer from './slices/calendar';
import kanbanReducer from './slices/kanban';
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
  mail: mailReducer,
  chat: chatReducer,
  calendar: calendarReducer,
  kanban: kanbanReducer,
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
});

export { rootPersistConfig, rootReducer };
