import * as React from 'react';
import { H1 } from 'app/components/common/typography/H1';
import styled from 'styled-components/macro';
import { AboutMeCard } from './AboutMe';
import { HomeCard } from './Home';

export function DefaultPortfolio() {
  return (
    <Container>
      <Content>
        <HomeCard title="Home Page" />
        <H1>Next</H1>
        <AboutMeCard title="About Me" />
      </Content>
    </Container>
  );
}

const Container = styled.div``;

const Content = styled.div``;
