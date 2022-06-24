import { SideBar } from 'app/components/SideBar';
import * as React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import { Dashboard } from './Dashboard/Loadable';

export function ProjectDashboardPage() {
  return (
    <>
      <Helmet>
        <title>ProjectDashboard Page</title>
        <meta
          name="description"
          content="A React Boilerplate application homepage"
        />
      </Helmet>
      <Container>
        <SideBar />
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Dashboard} />
          </Switch>
        </BrowserRouter>
      </Container>
    </>
  );
}

export const Container = styled.div`
  display: flex;
`;
