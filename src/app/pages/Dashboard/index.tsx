import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from 'app/components/Nav';
import styled from 'styled-components/macro';
// import { Masthead } from './Masthead';
// import { Features } from './Features';
import { Projects } from './Projects';
import { PageWrapper } from 'app/components/PageWrapper';

export function DashboardPage() {
  return (
    <>
      <Helmet>
        <title>Dashboard Page</title>
        <meta
          name="description"
          content="A React Boilerplate application homepage"
        />
      </Helmet>
      <NavBar />
      <PageWrapper>
        {/* <Masthead />
        <Features /> */}
        <Container>
          <Projects />
        </Container>
      </PageWrapper>
    </>
  );
}

const Container = styled.div`
  position: relative;
`;
