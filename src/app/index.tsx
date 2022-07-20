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

import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { GlobalStyle } from '../styles/global-styles';

import { NotFoundPage } from './pages/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import { DashboardPage } from './pages/DashboardPage/Loadable';
import { SignInPage } from './pages/Auth/SignInPage/Loadable';
import { ProjectPage } from './pages/ProjectPage/Loadable';
import { PricingPage } from './pages/PricingPage';
import { ProfilePage } from './pages/ProfilePage';
import { CreateSitePage } from './pages/CreateSitePage/Loadable';

export function App() {
  const { i18n } = useTranslation();

  const httpLink = createHttpLink({
    uri: 'http://localhost:1337/graphql',
  });

  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjU3OTE2MjQ4LCJleHAiOjE2NjA1MDgyNDh9.mZbfpqPjT82tM8DnPoXPijPY906v6IbtyAFCqxc03nk'; //localStorage.getItem('token');
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - Weblinnk"
        defaultTitle="Weblinnk"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A Weblinnk application" />
      </Helmet>
      <ApolloProvider client={client}>
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
          <Route
            exact
            path={process.env.PUBLIC_URL + '/create-site'}
            component={CreateSitePage}
          />
          <Route component={NotFoundPage} />
        </Switch>
        <GlobalStyle />
      </ApolloProvider>
    </BrowserRouter>
  );
}
