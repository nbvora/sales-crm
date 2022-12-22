// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
import SvgIconStyle from '../../../components/SvgIconStyle';

const getIcon = (name) => <SvgIconStyle src={`/icons/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const ICONS = {
  dashboard: getIcon('ic_home_dashboard'),
  inventory: getIcon('ic_inventory'),
  vendors: getIcon('ic_vendors'),
  customers: getIcon('ic_customers'),
  leads: getIcon('ic_leads'),
  order: getIcon('ic_order'),
  employees: getIcon('ic_employees'),
  invoice: getIcon('ic_invoice'),
  setting: getIcon('ic_setting'),
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
        icon: ICONS.inventory,
        children: [
          { title: 'Product Category', path: PATH_DASHBOARD.user.profile },
          { title: 'Product', path: PATH_DASHBOARD.user.cards },
          { title: 'Stock Management', path: PATH_DASHBOARD.user.list },
        ],
      },
      { title: 'Vendors', path: PATH_DASHBOARD.general.employee, icon: ICONS.vendors },
      { title: 'Customers', path: PATH_DASHBOARD.general.customer, icon: ICONS.customers },
      { title: 'Leads', path: PATH_DASHBOARD.lead.root, icon: ICONS.leads },
      { title: 'Order', path: PATH_DASHBOARD.order.root, icon: ICONS.order },
      {
        title: 'Employees',
        path: PATH_DASHBOARD.employee.root,
        icon: ICONS.employees,
        children: [
          { title: 'Employee Target', path: PATH_DASHBOARD.employee.employeetarget },
          { title: 'Employee List', path: PATH_DASHBOARD.employee.employeelist },
        ],
      },
      {
        title: 'invoice',
        path: PATH_DASHBOARD.invoice.root,
        icon: ICONS.invoice,
        children: [{ title: '2022', path: PATH_DASHBOARD.invoice.root }],
      },
      {
        title: 'settings',
        path: PATH_DASHBOARD.settings.root,
        icon: ICONS.setting,
        children: [
          { title: 'employee role', path: PATH_DASHBOARD.settings.employeerole },
          { title: 'Supply Chain User types', path: PATH_DASHBOARD.settings.supplychain },
          { title: 'Order Qnty type', path: PATH_DASHBOARD.settings.orderqnty },
        ],
      },
    ],
  },
];

export default navConfig;
