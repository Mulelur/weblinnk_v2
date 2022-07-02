import styled from 'styled-components/macro';

export const Row = styled.div`
  display: flex;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
