import { P } from 'app/pages/NotFoundPage/P';
import * as React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';
import { StolenButton } from '../common/buttons/stolen';

export function Upgrade() {
  const history = useHistory();

  const goTo = (source: string) => {
    history.push(source);
  };

  return (
    <Container>
      <Content>
        <P>Upgrade Your Plan Now</P>
        <ButtonWarper>
          <StolenButton
            onClick={() => goTo(process.env.PUBLIC_URL + '/pricing')}
          >
            Upgrade
          </StolenButton>
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

const ButtonWarper = styled.div``;
