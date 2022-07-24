import * as React from 'react';
import styled from 'styled-components/macro';
import { Helmet } from 'react-helmet-async';
import { NavBar } from 'app/components/NavBar';
import LinearStepper from './components/stepper';

export function CreateSitePage() {
  return (
    <>
      <Helmet>
        <title>Create Site</title>
        <meta
          name="Create-Site"
          content="Create your website in less than 5 minutes"
        />
      </Helmet>
      <NavBar />
      <Wrapper>
        <Container>
          <Content>
            <LinearStepper />
          </Content>
        </Container>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  height: calc(100vh - 8rem);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  // min-height: 320px;
`;

const Container = styled.div``;

const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 780px;
  min-width: 380px;

  text-align: center;
`;
