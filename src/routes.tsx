import React from 'react';
import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import LoadingScreen from './components/Loading';
import { pageLoader } from './utils/lazyImport';
import { IRouteItem } from './types/routes';
import AuthGuard from './layouts/guards/AuthGuard';
import DashboardLayout from './layouts/DashboardLayout';
import GuestGuard from './layouts/guards/GuestGuard';
import Error from './views/Error';
import Main from './layouts/Main';
import Login from './views/Login';

export const renderRoutes = (routes: IRouteItem[] = []) => (
  <Suspense fallback={<LoadingScreen />}>
    <Routes>
      {/* <Route path="/login" element={<Login />} /> */}
      {routes.map((route, index) => {
        const Component = route.component;
        const Guard = route.guard;
        const Layout = route.layout || <></>;

        return (
          <Route
            key={index}
            path={route.path}
            element={
              <Layout>
                <Guard>
                  <Main>
                    <Component />
                  </Main>
                </Guard>
              </Layout>
            }
          />
        );
      })}
      <Route path="*" element={<Error message="404 - Page not found" />} />
      {/* </Route> */}
    </Routes>
  </Suspense>
);

const routes: IRouteItem[] = [
  {
    exact: true,
    path: '/',
    component: lazy(pageLoader(() => import('./views/Home'))),
    guard: AuthGuard,
    layout: DashboardLayout,
  },
  {
    exact: true,
    path: '/login',
    component: lazy(pageLoader(() => import('./views/Login'))),
    guard: GuestGuard,
    layout: GuestGuard,
  },
  {
    exact: true,
    path: '/about',
    component: lazy(pageLoader(() => import('./views/About'))),
    guard: AuthGuard,
    layout: DashboardLayout,
  },
];

export default routes;
