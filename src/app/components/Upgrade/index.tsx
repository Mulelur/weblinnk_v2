import * as React from 'react';
import styled from 'styled-components/macro';
import { StolenButton } from '../common/buttons/stolen';

export function Upgrade() {
  return (
    <Container>
      <Content>
        <Title>Upgrade Your Plan Now</Title>
        <ButtonWarper>
          <StolenButton>Upgrade</StolenButton>
        </ButtonWarper>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  bottom: 4rem;
  left: 2rem;
`;

const Content = styled.div`
  display: flex;
  height: 4rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h4`
  font-size: 1rem;
  font-weight: 500;
`;

const ButtonWarper = styled.div``;
