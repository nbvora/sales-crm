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
        { path: 'ecommerce', element: <GeneralVendors /> },
        { path: 'analytics', element: <GeneralCustomers /> },
        { path: 'banking', element: <GeneralLeads /> },
        { path: 'booking', element: <GeneralOrder /> },

        {
          path: 'e-commerce',
          children: [
            { path: 'product/:name/edit', element: <EmployeeTarget /> },
            { path: 'checkout', element: <EmployeeList /> },
          ],
        },
        {
          path: 'user',
          children: [
            { element: <Navigate to="/dashboard/user/profile" replace />, index: true },
            { path: 'profile', element: <ProductCategory /> },
            { path: 'cards', element: <ProductList /> },
            { path: 'list', element: <StockManagement /> },
            { path: 'new', element: <StockDetail /> },
            { path: 'account', element: <UserAccount /> },
            { path: ':name/editproductcategory', element: <EditProductCategory /> },
            { path: ':name/editproduct', element: <EditProduct /> },
            { path: 'addcategory', element: <AddCategory /> },
            { path: 'productimport', element: <ProductImport /> },
            { path: 'addnewproduct', element: <Addproduct /> },
            { path: 'stockimport', element: <StockImport /> },
          ],
        },
        {
          path: 'blog',
          children: [
            { element: <Navigate to="/dashboard/blog/posts" replace />, index: true },
            { path: 'posts', element: <Invoice /> },
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
const GeneralLeads = Loadable(lazy(() => import('../pages/dashboard/GeneralLeads')));
const GeneralOrder = Loadable(lazy(() => import('../pages/dashboard/GeneralOrder')));
const EmployeeTarget = Loadable(lazy(() => import('../pages/dashboard/EmployeeTarget')));
const EmployeeList = Loadable(lazy(() => import('../pages/dashboard/EmployeeList')));
const Invoice = Loadable(lazy(() => import('../pages/dashboard/Invoice')));
const ProductCategory = Loadable(lazy(() => import('../pages/dashboard/ProductCategory')));
const ProductList = Loadable(lazy(() => import('../pages/dashboard/ProductList')));
const StockManagement = Loadable(lazy(() => import('../pages/dashboard/StockManagement')));
const UserAccount = Loadable(lazy(() => import('../pages/dashboard/UserAccount')));
const StockDetail = Loadable(lazy(() => import('../pages/dashboard/StockDetail')));
const EditProductCategory = Loadable(lazy(() => import('../pages/dashboard/EditProductCategory')));
const EditProduct = Loadable(lazy(() => import('../pages/dashboard/EditProduct')));
const AddCategory = Loadable(lazy(() => import('../pages/dashboard/AddCategory')));
const ProductImport = Loadable(lazy(() => import('../pages/dashboard/ProductImprt')));
const Addproduct = Loadable(lazy(() => import('../pages/dashboard/AddProduct')));
const StockImport = Loadable(lazy(() => import('../pages/dashboard/StockImport')));
const Page500 = Loadable(lazy(() => import('../pages/Page500')));
const NotFound = Loadable(lazy(() => import('../pages/Page404')));
