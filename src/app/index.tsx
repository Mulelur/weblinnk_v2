/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from '../styles/global-styles';

// import { HomePage } from './pages/HomePage/Loadable';
import { NotFoundPage } from './pages/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import { DashboardPage } from './pages/Dashboard/Loadable';
import { SignInPage } from './pages/Auth/SignIn/Loadable';
import { ProjectDashboardPage } from './pages/ProjectDashboard/Loadable';

export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - Weblinnk"
        defaultTitle="Weblinnk"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A Weblinnk application" />
      </Helmet>

      <Switch>
        {/* <Route exact path={process.env.PUBLIC_URL + '/'} component={HomePage} /> */}
        <Route
          exact
          path={process.env.PUBLIC_URL + '/'}
          component={DashboardPage}
        />
        <Route
          exact
          path={process.env.PUBLIC_URL + '/dashboard/1'}
          component={ProjectDashboardPage}
        />
        <Route
          exact
          path={process.env.PUBLIC_URL + '/signin'}
          component={SignInPage}
        />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}
