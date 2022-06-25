import { SideBar } from 'app/components/SideBar';
import * as React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import { Dashboard } from './Dashboard/Loadable';
import { NavBar } from 'app/components/Nav';

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
        <Content>
          <SideBar />
          <Main>
            <NavBar />
            <BrowserRouter>
              <Switch>
                <Route path="/" component={Dashboard} />
              </Switch>
            </BrowserRouter>
          </Main>
        </Content>
      </Container>
    </>
  );
}

export const Container = styled.div`
  // display: flex;
  background-color: rgb(252, 252, 252);
  color: rgb(18, 22, 30);
  height: 100%;
`;

export const Content = styled.div`
  padding-left: 252px;
  height: 100vh;
  width: 100%;
  box-sizing: border-box;
  overflow: scroll;
  -webkit-box-flex: 1;
  flex-grow: 1;
`;

export const Main = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  will-change: opacity;
`;
