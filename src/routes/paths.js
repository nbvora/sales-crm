// ----------------------------------------------------------------------

function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = '';
const ROOTS_DASHBOARD = '';

// ----------------------------------------------------------------------

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, '/login'),
  loginUnprotected: path(ROOTS_AUTH, '/login-unprotected'),
  register: path(ROOTS_AUTH, '/register'),
  registerUnprotected: path(ROOTS_AUTH, '/register-unprotected'),
  resetPassword: path(ROOTS_AUTH, '/reset-password'),
  verify: path(ROOTS_AUTH, '/verify'),
};

export const PATH_PAGE = {
  comingSoon: '/coming-soon',
  maintenance: '/maintenance',
  pricing: '/pricing',
  payment: '/payment',
  about: '/about-us',
  contact: '/contact-us',
  faqs: '/faqs',
  page404: '/404',
  page500: '/500',
  components: '/components',
};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  general: {
    app: path(ROOTS_DASHBOARD, '/dashboard'),
    vendor: path(ROOTS_DASHBOARD, '/vendor'),
    customer: path(ROOTS_DASHBOARD, '/customer'),
    banking: path(ROOTS_DASHBOARD, '/leads'),
    booking: path(ROOTS_DASHBOARD, '/orders'),
    invoice: path(ROOTS_DASHBOARD, '/invoice'),
    profile: path(ROOTS_DASHBOARD, '/profile'),
    changepassword: path(ROOTS_DASHBOARD, '/changepassword'),
  },
  inventory: {
    root: path(ROOTS_DASHBOARD, '/inventory'),
    productcategory: path(ROOTS_DASHBOARD, '/inventory/productcategory'),
    productlist: path(ROOTS_DASHBOARD, '/inventory/productlist'),
    stockmanagement: path(ROOTS_DASHBOARD, '/inventory/stockmanagement'),
    productimport: path(ROOTS_DASHBOARD, '/inventory/productlist/import'),
    stockimport: path(ROOTS_DASHBOARD, '/inventory/stockmanagement/import'),
  },
  employee: {
    root: path(ROOTS_DASHBOARD, '/employee'),
    viewemployeedetail: path(ROOTS_DASHBOARD, '/employee/employeelist/detail'),
    employeetarget: path(ROOTS_DASHBOARD, '/employee/employeetarget'),
    employeelist: path(ROOTS_DASHBOARD, '/employee/employeelist'),
  },
  settings: {
    root: path(ROOTS_DASHBOARD, '/settings'),
    employeerole: path(ROOTS_DASHBOARD, '/settings/employeerole'),
    supplychain: path(ROOTS_DASHBOARD, '/settings/supplychain'),
    orderqnty: path(ROOTS_DASHBOARD, '/settings/orderqnty'),
  },
  lead: {
    root: path(ROOTS_DASHBOARD, '/leads'),
    leadDetail: path(ROOTS_DASHBOARD, '/leads/leadDetail'),
    viewLeadDetail: path(ROOTS_DASHBOARD, '/leads/viewLeadDetail'),
  },
  order: {
    root: path(ROOTS_DASHBOARD, '/orders'),
    viewInvoiceDetail: path(ROOTS_DASHBOARD, '/orders/viewInvoiceDetail'),
  },
};

export const PATH_DOCS = 'https://docs-minimals.vercel.app/introduction';
