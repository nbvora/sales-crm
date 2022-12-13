// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
import SvgIconStyle from '../../../components/SvgIconStyle';

const getIcon = (name) => <SvgIconStyle src={`/icons/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const ICONS = {
  blog: getIcon('ic_blog'),
  cart: getIcon('ic_cart'),
  chat: getIcon('ic_chat'),
  mail: getIcon('ic_mail'),
  user: getIcon('ic_user'),
  kanban: getIcon('ic_kanban'),
  banking: getIcon('ic_banking'),
  calendar: getIcon('ic_calendar'),
  ecommerce: getIcon('ic_ecommerce'),
  analytics: getIcon('ic_analytics'),
  dashboard: getIcon('ic_dashboard'),
  booking: getIcon('ic_booking'),
};

const navConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    subheader: 'general',
    items: [
      { title: 'DashBoard', path: PATH_DASHBOARD.general.app, icon: ICONS.dashboard },
      {
        title: 'Inventory-Management',
        path: PATH_DASHBOARD.user.root,
        icon: ICONS.user,
        children: [
          { title: 'Product Category', path: PATH_DASHBOARD.user.profile },
          { title: 'Product', path: PATH_DASHBOARD.user.cards },
          { title: 'Stock Management', path: PATH_DASHBOARD.user.list },
        ],
      },
      { title: 'Vendors', path: PATH_DASHBOARD.general.ecommerce, icon: ICONS.ecommerce },
      { title: 'Customers', path: PATH_DASHBOARD.general.analytics, icon: ICONS.analytics },
      { title: 'Leads', path: PATH_DASHBOARD.lead.root, icon: ICONS.banking },
      { title: 'Order', path: PATH_DASHBOARD.order.root, icon: ICONS.booking },
      {
        title: 'Employees',
        path: PATH_DASHBOARD.eCommerce.root,
        icon: ICONS.cart,
        children: [
          { title: 'Employee Target', path: PATH_DASHBOARD.eCommerce.editById },
          { title: 'Employee List', path: PATH_DASHBOARD.eCommerce.checkout },
        ],
      },
      {
        title: 'invoice',
        path: PATH_DASHBOARD.blog.root,
        icon: ICONS.blog,
        children: [{ title: '2022', path: PATH_DASHBOARD.blog.posts }],
      },
      {
        title: 'settings',
        path: PATH_DASHBOARD.settings.root,
        icon: ICONS.blog,
        children: [
          { title: 'employee role', path: PATH_DASHBOARD.settings.employeerole },
          { title: 'supplychain role', path: PATH_DASHBOARD.settings.supplychain },
          { title: 'orderqnty role', path: PATH_DASHBOARD.settings.orderqnty },
        ],
      },
    ],
  },
];

export default navConfig;
