import * as React from 'react';
import styled from 'styled-components/macro';
import { ReactComponent as LogoIcon } from './assets/logo-icon.svg';

export function Logo() {
  return (
    <Wrapper>
      <Title>
        <IconWrapper>
          <LogoIcon />
        </IconWrapper>
        Weblinnk
      </Title>
      <Description>Create cool webapps</Description>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 1.25rem;
  color: ${p => p.theme.text};
  font-weight: bold;
  margin-right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Description = styled.div`
  font-size: 0.875rem;
  color: ${p => p.theme.textSecondary};
  font-weight: normal;
`;

const IconWrapper = styled.div`
  padding-right: 0.5rem;
`;
