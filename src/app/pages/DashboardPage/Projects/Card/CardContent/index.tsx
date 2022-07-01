import * as React from 'react';
import { H1 } from 'app/components/common/typography/H1';
import styled from 'styled-components/macro';

export function CardContent() {
  return (
    <>
      <Wrapper>
        <Container>
          <H1>Projects</H1>
        </Container>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 3.2rem;
  color: ${p => p.theme.text}
  display: flex;
  padding: 0.8rem;
  align-items: center;
  border-bottom: 2px solid ${p => p.theme.borderLight};
`;

const Container = styled.div`
  padding: 0.25rem;
`;
