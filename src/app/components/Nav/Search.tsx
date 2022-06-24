import * as React from 'react';
import styled from 'styled-components/macro';

export function Search() {
  return (
    <Wrapper>
      <Input placeholder="search" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

// const Title = styled.div`
//   font-size: 1.25rem;
//   color: ${p => p.theme.text};
//   font-weight: bold;
//   margin-right: 1rem;
// `;

// const Description = styled.div`
//   font-size: 0.875rem;
//   color: ${p => p.theme.textSecondary};
//   font-weight: normal;
// `;

const Input = styled.input`
  padding: 0.25rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 0.25rem;
  border: 1px solid ${p => p.theme.borderLight};
  background-color: ${p => p.theme.background};
  background-color: transparent;
  color: ${p => p.theme.text};
  border: none;

  &:focus {
    outline: none;
    border: 1px solid ${p => p.theme.primary};
  }
`;
