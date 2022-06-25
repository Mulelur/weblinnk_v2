import * as React from 'react';

import { H1 } from 'app/components/common/typography/H1';
import styled from 'styled-components/macro';
import { themes } from 'styles/theme/themes';

export function Dashboard() {
  return (
    <Container>
      <Content>
        <H1>Get started, Rotonda!</H1>
        <Card>Hello</Card>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  width: 884px;
  margin: 1rem auto;
  padding: 0 1.5rem;
  box-sizing: content-box;
`;

const Content = styled.div``;

const Card = styled.div`
  border-radius: 7px;
  border-color: ${p => p.theme.borderLight};
  background-color: ${p => p.theme.background};
  box-shadow: ${p => p.theme.primary} 0px 0px 0px 1px inset,
    rgb(38 38 44 / 7%) 0px 1px 3px;

  padding: 1.3rem;
`;
