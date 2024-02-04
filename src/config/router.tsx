import React from 'react';
import App from '@/page/App';
import Layout from '@/components/layout';
import { createBrowserRouter } from 'react-router-dom';
import SignUp from '@/page/sign-up';
import SignIn from '@/page/sign-in';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />
      },
      {
        path: 'sign-up',
        element: <SignUp />
      },
      {
        path: 'sign-in',
        element: <SignIn />
      }
    ]
  }
]);

export default router;
