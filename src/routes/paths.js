// ----------------------------------------------------------------------

function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = '/auth';
const ROOTS_DASHBOARD = '/dashboard';

// ----------------------------------------------------------------------

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, ''),
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
    app: path(ROOTS_DASHBOARD, '/app'),
    ecommerce: path(ROOTS_DASHBOARD, '/vendor'),
    analytics: path(ROOTS_DASHBOARD, '/customer'),
    banking: path(ROOTS_DASHBOARD, '/leads'),
    booking: path(ROOTS_DASHBOARD, '/orders'),
    profile: path(ROOTS_DASHBOARD, '/profile'),
    changepassword: path(ROOTS_DASHBOARD, '/changepassword'),
  },
  mail: {
    root: path(ROOTS_DASHBOARD, '/mail'),
    all: path(ROOTS_DASHBOARD, '/mail/all'),
  },
  chat: {
    root: path(ROOTS_DASHBOARD, '/chat'),
    new: path(ROOTS_DASHBOARD, '/chat/new'),
    conversation: path(ROOTS_DASHBOARD, '/chat/:conversationKey'),
  },
  calendar: path(ROOTS_DASHBOARD, '/calendar'),
  kanban: path(ROOTS_DASHBOARD, '/kanban'),
  user: {
    root: path(ROOTS_DASHBOARD, '/inventory'),
    profile: path(ROOTS_DASHBOARD, '/inventory/productcategory'),
    cards: path(ROOTS_DASHBOARD, '/inventory/productlist'),
    editproductcategory: (ROOTS_DASHBOARD, '/inventory/productcategory/reece-chung/edit'),
    editproduct: (ROOTS_DASHBOARD, ':name/reece-chung/edit'),
    list: path(ROOTS_DASHBOARD, '/inventory/stockmanagement'),
    addcategory: (ROOTS_DASHBOARD, '/inventory/productcategory/add'),
    newUser: path(ROOTS_DASHBOARD, '/inventory/stockmanagement/add'),
    editById: path(ROOTS_DASHBOARD, `/inventory/reece-chung/edit`),
    account: path(ROOTS_DASHBOARD, '/inventory/account'),
    productimport: path(ROOTS_DASHBOARD, '/inventory/productlist/import'),
    stockimport: path(ROOTS_DASHBOARD, '/inventory/stockmanagement/import'),
    addnewproduct: path(ROOTS_DASHBOARD, '/inventory/productlist/add'),
  },
  eCommerce: {
    root: path(ROOTS_DASHBOARD, '/employee'),
    // shop: path(ROOTS_DASHBOARD, '/e-commerce/shop'),
    // product: path(ROOTS_DASHBOARD, '/e-commerce/product/:name'),
    // productById: path(ROOTS_DASHBOARD, '/e-commerce/product/nike-air-force-1-ndestrukt'),
    // list: path(ROOTS_DASHBOARD, '/e-commerce/list'),
    // newProduct: path(ROOTS_DASHBOARD, '/e-commerce/product/new'),
    editById: path(ROOTS_DASHBOARD, '/employee/employeetarget'),
    checkout: path(ROOTS_DASHBOARD, '/employee/employeelist'),
    addemployeetarget: path(ROOTS_DASHBOARD, '/employee/employeetarget/add'),
    editemployeetarget: path(ROOTS_DASHBOARD, '/employee/employeetarget/reece-chung/edit'),
    editemployee: path(ROOTS_DASHBOARD, '/employee/reece-chung/edit'),
    addemployee: path(ROOTS_DASHBOARD, '/employee/employeelist/add'),
    employeeimport: path(ROOTS_DASHBOARD, '/employee/employeelist/import'),
    // invoice: path(ROOTS_DASHBOARD, '/e-commerce/invoice')
  },
  analytics: {
    root: path(ROOTS_DASHBOARD, '/customer'),
    editcustomer: (ROOTS_DASHBOARD, '/customer/reece-chung/edit'),
    addcustomer: (ROOTS_DASHBOARD, '/customer/add'),
    customerimport: (ROOTS_DASHBOARD, '/customer/import'),
  },
  vendor: {
    root: path(ROOTS_DASHBOARD, '/vendor'),
    editvendor: (ROOTS_DASHBOARD, '/vendor/reece-chung/edit'),
    addvendor: (ROOTS_DASHBOARD, '/vendor/add'),
    vendorimport: (ROOTS_DASHBOARD, '/vendor/import'),
  },
  blog: {
    root: path(ROOTS_DASHBOARD, '/invoice'),
    posts: path(ROOTS_DASHBOARD, '/invoice'),
    post: path(ROOTS_DASHBOARD, '/invoice/post/:title'),
    postById: path(ROOTS_DASHBOARD, '/invoice/post/apply-these-7-secret-techniques-to-improve-event'),
    newPost: path(ROOTS_DASHBOARD, '/invoice/new-post'),
    addinvoice: path(ROOTS_DASHBOARD, '/invoice/add'),
    editinvoice: path(ROOTS_DASHBOARD, '/invoice/reece-chung/edit'),
  },
  settings: {
    root: path(ROOTS_DASHBOARD, '/settings'),
    employeerole: path(ROOTS_DASHBOARD, '/settings/employeerole'),
    supplychain: path(ROOTS_DASHBOARD, '/settings/supplychain'),
    orderqnty: path(ROOTS_DASHBOARD, '/settings/orderqnty'),
  },
  lead: {
    root: path(ROOTS_DASHBOARD, '/leads'),
    leadImport: path(ROOTS_DASHBOARD, '/leads/import'),
    newLeads: path(ROOTS_DASHBOARD, '/leads/add'),
    leadDetail: path(ROOTS_DASHBOARD, '/leads/leadDetail'),
    viewLeadDetail: path(ROOTS_DASHBOARD, '/leads/viewLeadDetail'),
    editlead: path(ROOTS_DASHBOARD, '/leads/reece-chung/edit'),
  },
  order: {
    root: path(ROOTS_DASHBOARD, '/orders'),
    viewInvoiceDetail: path(ROOTS_DASHBOARD, '/orders/viewInvoiceDetail'),
  },
};

export const PATH_DOCS = 'https://docs-minimals.vercel.app/introduction';
