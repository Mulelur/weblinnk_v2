import { SideBar } from 'app/components/SideBar';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import { Dashboard } from './Dashboard/Loadable';
import { useParams } from 'react-router-dom';
import { HomeCard } from './Templates/Portfolio/1/Home';
import { AboutMeCard } from './Templates/Portfolio/1/AboutMe';
import { NavBar } from 'app/components/NavBar';
import { Settings } from './Settings';

export function ProjectPage() {
  const { section } = useParams<never>();

  const urlString = (sec: string) => {
    if (!sec) return '/';
    else {
      return '/' + sec;
    }
  };

  const renderMain = (type: string) => {
    let el: React.ReactNode;
    switch (type) {
      case '/':
        el = <Dashboard />;
        break;
      case '/home-settings':
        el = <HomeCard title="Home page" />;
        break;
      case '/aboutMe-settings':
        el = <AboutMeCard title="aboutMe" />;
        break;
      case '/settings':
        el = <Settings />;
        break;
      default:
        el = <>default</>;
        break;
    }
    return el;
  };

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
            <MainView>{renderMain(urlString(section))}</MainView>
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

const MainView = styled.div`
  padding: 2rem;
`;
