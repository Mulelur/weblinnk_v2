import * as React from 'react';
import styled from 'styled-components/macro';
import { ReactComponent as MenuIcon } from './assets/menu-icon.svg';

export default function Menu() {
  return (
    <Wrapper>
      <Container>
        <Content>
          <MenuIcon />
        </Content>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: none;

  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

const Container = styled.div``;

const Content = styled.div`
  color: rgba(215, 113, 88, 1);
  padding-right: 0.8rem;
`;
