import { lazy } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';

// project imports
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';
// import { element } from 'prop-types';

// login option 3 routing
const AuthLogin3 = Loadable(lazy(() => import('views/pages/authentication3/Login3')));
const AuthRegister3 = Loadable(lazy(() => import('views/pages/authentication3/Register3')));
const RegisterDetail3 = Loadable(lazy(() => import('views/pages/authentication3/RegisterDetail3')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: '/pages/login/login3',
      element: 
      <GoogleOAuthProvider clientId='260417354851-ajeqr5t63t2qk7cs4g96leojk7hsoipc.apps.googleusercontent.com'>
        <AuthLogin3 />
      </GoogleOAuthProvider>
    },
    {
      path: '/pages/register/register3',
      element: 
      <GoogleOAuthProvider clientId='260417354851-ajeqr5t63t2qk7cs4g96leojk7hsoipc.apps.googleusercontent.com'>
        <AuthRegister3 />
      </GoogleOAuthProvider>
    },
    {
      path: '/pages/register/detail3',
      element: <RegisterDetail3 />
    }
  ]
};

export default AuthenticationRoutes;
