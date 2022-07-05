import styled from 'styled-components/macro';

export const Input = styled.input`
  font-weight: normal;
  margin: 0;
  padding: 0;
  color: ${p => p.theme.primary};
  font-size: 1.05rem;
  padding: 0.5rem;
  border: 1px solid ${p => p.theme.border};
  background-color: ${p => p.theme.background};
  border-radius: 0.45rem;
  width: 100%;
  height: 3rem;

  &:focus {
    outline: none;
    color: ${p => p.theme.primary};
    border: 1px solid ${p => p.theme.primary};
  }
`;
