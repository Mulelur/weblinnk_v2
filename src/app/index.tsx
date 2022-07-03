/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';

import { GlobalStyle } from '../styles/global-styles';

import { NotFoundPage } from './pages/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import { DashboardPage } from './pages/DashboardPage/Loadable';
import { SignInPage } from './pages/Auth/SignInPage/Loadable';
import { ProjectPage } from './pages/ProjectPage/Loadable';
import { PricingPage } from './pages/PricingPage';
import { ProfilePage } from './pages/ProfilePage';

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
        <Route
          exact
          path={process.env.PUBLIC_URL + '/'}
          component={DashboardPage}
        />
        <Route
          path={process.env.PUBLIC_URL + '/project/:id?/:section?'}
          component={ProjectPage}
        />
        <Route path="/requirements">
          <Redirect to="/requirements/personal" />
        </Route>
        <Route
          exact
          path={process.env.PUBLIC_URL + '/signin'}
          component={SignInPage}
        />
        <Route
          exact
          path={process.env.PUBLIC_URL + '/pricing'}
          component={PricingPage}
        />
        <Route
          exact
          path={process.env.PUBLIC_URL + '/profile'}
          component={ProfilePage}
        />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}
