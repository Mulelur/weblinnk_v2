import React from 'react';
import styled from 'styled-components/macro';

export function CardHeader() {
  return (
    <>
      <Wrapper>Projects</Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: 28rem;
  height: 3.2rem;
  border-radius: 0.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
