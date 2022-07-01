import styled from 'styled-components/macro';

export const Button = styled.button`
  padding: 0.5rem;
  width: 4.3rem;
  height: 4.3rem;
  border: none;
  border-radius: 50%;
  background-color: ${p => p.theme.primary};
  position: absolute;
  right: 0rem;
  bottom: 2rem;
`;
