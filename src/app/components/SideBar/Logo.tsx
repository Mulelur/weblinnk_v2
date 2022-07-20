import * as React from 'react';
import styled from 'styled-components/macro';
import { ReactComponent as LogoIcon } from './assets/logo-icon.svg';

export function Logo() {
  return (
    <Wrapper>
      <Title href="/">
        <IconWrapper>
          <LogoIcon />
        </IconWrapper>
        Weblinnk
      </Title>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  height: 4rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.a`
  font-size: 1.25rem;
  color: ${p => p.theme.text};
  font-weight: bold;
  margin-right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;

const IconWrapper = styled.div`
  padding-right: 0.5rem;
`;
