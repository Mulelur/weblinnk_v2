import { H1 } from 'app/components/common/typography/H1';
import * as React from 'react';
import styled from 'styled-components/macro';

export function Dashboard() {
  return (
    <Wrapper>
      <H1>Wellcome back</H1>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  width: 960px;
  margin: 0 auto;
  padding: 0 1.5rem;
  box-sizing: content-box;
`;
