/**
 *
 * App
 *
 * This element is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

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
import PrivateRoutes from 'routes/privateRoutes';
import { SignUpPage } from './pages/Auth/SignUpPage/Loadable';

export function App() {
  const { i18n } = useTranslation();

  const httpLink = createHttpLink({
    uri: 'https://weblinnk-api.herokuapp.com/graphql',
  });

  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('jwt');
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
        {/* Public Routes  */}
        <Routes>
          <Route
            path={process.env.PUBLIC_URL + '/signin'}
            element={<SignInPage />}
          />

          <Route
            path={process.env.PUBLIC_URL + '/signup'}
            element={<SignUpPage />}
          />

          <Route
            path={process.env.PUBLIC_URL + '/pricing'}
            element={<PricingPage />}
          />

          <Route element={<NotFoundPage />} />

          {/* Private Routes */}
          <Route element={<PrivateRoutes />}>
            <Route
              path={process.env.PUBLIC_URL + '/profile'}
              element={<ProfilePage />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/create-site'}
              element={<CreateSitePage />}
            />

            <Route
              path={process.env.PUBLIC_URL + '/'}
              element={<DashboardPage />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/project/*'}
              element={<ProjectPage />}
            />
          </Route>
        </Routes>
        <GlobalStyle />
      </ApolloProvider>
    </BrowserRouter>
  );
}
