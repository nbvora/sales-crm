import { Suspense, lazy } from 'react';
import { Navigate, useRoutes, useLocation } from 'react-router-dom';
// layouts
import DashboardLayout from '../layouts/dashboard';
import LogoOnlyLayout from '../layouts/LogoOnlyLayout';
// guards
import GuestGuard from '../guards/GuestGuard';
import AuthGuard from '../guards/AuthGuard';
// config
import { PATH_AFTER_LOGIN } from '../config';
// components
import LoadingScreen from '../components/LoadingScreen';
// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();

  return (
    <Suspense fallback={<LoadingScreen isDashboard={pathname.includes('/dashboard')} />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: 'auth',
      children: [
        {
          path: '',
          element: (
            <GuestGuard>
              <Login />
            </GuestGuard>
          ),
        },
        {
          path: 'register',
          element: (
            <GuestGuard>
              <Register />
            </GuestGuard>
          ),
        },
        { path: 'login-unprotected', element: <Login /> },
        { path: 'register-unprotected', element: <Register /> },
        { path: 'reset-password', element: <ResetPassword /> },
        { path: 'verify', element: <VerifyCode /> },
      ],
    },
    // Dashboard Routes
    {
      path: 'dashboard',
      element: (
        <AuthGuard>
          <DashboardLayout />
        </AuthGuard>
      ),
      children: [
        { element: <Navigate to={PATH_AFTER_LOGIN} replace />, index: true },
        { path: 'app', element: <GeneralDashboard /> },
        { path: 'vendors', element: <GeneralVendors /> },
        { path: 'customer', element: <GeneralCustomers /> },
        { path: 'leads', element: <Leads /> },
        { path: 'orders', element: <Orders /> },
        { path: 'profile', element: <ProfileForm /> },
        {
          path: 'leads',
          children: [
            { path: 'leadImport', element: <LeadImportForm /> },
            { path: 'newLeads', element: <AddNewLeadForm /> },
            { path: 'viewLeadDetail', element: <ViewLeadDetailForm /> },
            { path: ':name/editlead', element: <EditLeads /> },
            { path: 'leadDetail', element: <ViewLeadDetailForm /> },
          ],
        },
        {
          path: 'orders',
          children: [{ path: 'viewInvoiceDetail', element: <ViewInvoiceDeatilForm /> }],
        },
        {
          path: 'customer',
          children: [
            { path: ':name/editcustomer', element: <EditCustomerDetail /> },
            { path: 'addcustomer', element: <AddCustomer /> },
            { path: 'customerimport', element: <CustomerImport /> },
          ],
        },
        {
          path: 'vendor',
          children: [
            { path: ':name/editvendor', element: <EditVendor /> },
            { path: 'addvendor', element: <AddVendor /> },
            { path: 'vendorimport', element: <VendorImport /> },
          ],
        },
        {
          path: 'employee',
          children: [
            { path: 'employeetarget', element: <EmployeeTarget /> },
            { path: 'employeelist', element: <EmployeeList /> },
            { path: 'addemployeetarget', element: <AddEmployeeTarget /> },
            { path: ':name/editemployeetarget', element: <EditEmployeeTarget /> },
            { path: 'addemployee', element: <AddEmployee /> },
            { path: ':name/editemployee', element: <EditEmployee /> },
            { path: 'employeeimport', element: <EmployeeImport /> },
          ],
        },
        {
          path: 'inventory',
          children: [
            { element: <Navigate to="/dashboard/inventory/productcategory" replace />, index: true },
            { path: 'productcategory', element: <ProductCategory /> },
            { path: 'productlist', element: <ProductList /> },
            { path: 'stockmanagement', element: <StockManagement /> },
            { path: 'addstock', element: <AddStock /> },
            { path: ':name/editproductcategory', element: <EditProductCategory /> },
            { path: ':name/editproduct', element: <EditProduct /> },
            { path: 'addcategory', element: <AddCategory /> },
            { path: 'productimport', element: <ProductImport /> },
            { path: 'addnewproduct', element: <Addproduct /> },
            { path: 'stockimport', element: <StockImport /> },
          ],
        },
        {
          path: 'settings',
          children: [
            { path: 'employeerole', element: <EmployeeRole /> },
            { path: 'supplychain', element: <SupplyChain /> },
            { path: 'orderqnty', element: <OrderQnty /> },
          ],
        },
        {
          path: 'invoice',
          children: [
            { element: <Navigate to="/dashboard/invoice/posts" replace />, index: true },
            { path: 'posts', element: <Invoice /> },
            { path: 'addinvoice', element: <AddInvoice /> },
            { path: ':name/editinvoice', element: <EditInvoice /> },
          ],
        },
      ],
    },

    // Main Routes
    {
      path: '*',
      element: <LogoOnlyLayout />,
      children: [
        { path: '500', element: <Page500 /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" replace /> },
      ],
    },
    {
      path: '/',
      element: (
        <GuestGuard>
          <Login />
        </GuestGuard>
      ),
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}

// IMPORT COMPONENTS

// Authentication
const Login = Loadable(lazy(() => import('../pages/auth/Login')));
const Register = Loadable(lazy(() => import('../pages/auth/Register')));
const ResetPassword = Loadable(lazy(() => import('../pages/auth/ResetPassword')));
const VerifyCode = Loadable(lazy(() => import('../pages/auth/VerifyCode')));
// Dashboard
const GeneralDashboard = Loadable(lazy(() => import('../pages/dashboard/GeneralDashboard')));
const GeneralVendors = Loadable(lazy(() => import('../pages/dashboard/GeneralVendors')));
const GeneralCustomers = Loadable(lazy(() => import('../pages/dashboard/GeneralCustomers')));
const EmployeeTarget = Loadable(lazy(() => import('../pages/dashboard/EmployeeTarget')));
const EmployeeList = Loadable(lazy(() => import('../pages/dashboard/EmployeeList')));
const Invoice = Loadable(lazy(() => import('../pages/dashboard/Invoice')));
const ProductCategory = Loadable(lazy(() => import('../pages/dashboard/ProductCategory')));
const ProductList = Loadable(lazy(() => import('../pages/dashboard/ProductList')));
const StockManagement = Loadable(lazy(() => import('../pages/dashboard/StockManagement')));
const Leads = Loadable(lazy(() => import('../pages/dashboard/Leads')));
const LeadImportForm = Loadable(lazy(() => import('../sections/@dashboard/forms/LeadImportForm')));
const ViewLeadDetailForm = Loadable(lazy(() => import('../sections/@dashboard/forms/ViewLeadDetailForm')));
const Orders = Loadable(lazy(() => import('../pages/dashboard/Orders')));
const ViewInvoiceDeatilForm = Loadable(lazy(() => import('../sections/@dashboard/forms/ViewInvoiceDeatilForm')));

const EmployeeRole = Loadable(lazy(() => import('../pages/dashboard/EmployeeRole')));
const SupplyChain = Loadable(lazy(() => import('../pages/dashboard/SupplyChain')));
const OrderQnty = Loadable(lazy(() => import('../pages/dashboard/OrderQntyType')));

const Page500 = Loadable(lazy(() => import('../pages/Page500')));
const NotFound = Loadable(lazy(() => import('../pages/Page404')));

// form section
const ProfileForm = Loadable(lazy(() => import('../sections/@dashboard/forms/ProfileForm')));
const AddNewLeadForm = Loadable(lazy(() => import('../sections/@dashboard/forms/LeadForm')));
const EditLeads = Loadable(lazy(() => import('../sections/@dashboard/forms/LeadForm')));
const StockImport = Loadable(lazy(() => import('../sections/@dashboard/forms/StockImport')));
const ProductImport = Loadable(lazy(() => import('../sections/@dashboard/forms/ProductImprt')));
const EditProduct = Loadable(lazy(() => import('../sections/@dashboard/forms/ProductForm')));
const AddStock = Loadable(lazy(() => import('../sections/@dashboard/forms/StockForm')));
const AddCategory = Loadable(lazy(() => import('../sections/@dashboard/forms/CategoryForm')));
const EditProductCategory = Loadable(lazy(() => import('../sections/@dashboard/forms/CategoryForm')));
const Addproduct = Loadable(lazy(() => import('../sections/@dashboard/forms/ProductForm')));

const EditCustomerDetail = Loadable(lazy(() => import('../sections/@dashboard/forms/CustomerForm')));
const AddCustomer = Loadable(lazy(() => import('../sections/@dashboard/forms/CustomerForm')));
const EditVendor = Loadable(lazy(() => import('../sections/@dashboard/forms/VendorForm')));
const AddVendor = Loadable(lazy(() => import('../sections/@dashboard/forms/VendorForm')));
const EditEmployeeTarget = Loadable(lazy(() => import('../sections/@dashboard/forms/EmployeeTargetForm')));
const AddEmployeeTarget = Loadable(lazy(() => import('../sections/@dashboard/forms/EmployeeTargetForm')));
const EditEmployee = Loadable(lazy(() => import('../sections/@dashboard/forms/EmployeeListForm')));
const AddEmployee = Loadable(lazy(() => import('../sections/@dashboard/forms/EmployeeListForm')));
const AddInvoice = Loadable(lazy(() => import('../sections/@dashboard/forms/InvoiceForm')));
const EditInvoice = Loadable(lazy(() => import('../sections/@dashboard/forms/InvoiceForm')));

const CustomerImport = Loadable(lazy(() => import('../sections/@dashboard/forms/CustomerImport')));
const VendorImport = Loadable(lazy(() => import('../sections/@dashboard/forms/VendorImport')));
const EmployeeImport = Loadable(lazy(() => import('../sections/@dashboard/forms/EmployeeImport')));
