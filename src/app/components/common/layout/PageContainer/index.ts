import styled from 'styled-components/macro';

export const PageContainer = styled.div`
  margin: 1rem auto;
  padding: 0 1.5rem;
  box-sizing: content-box;

  @media only screen and (max-width: 600px) {
    padding: 0 0.9rem;
  }

  // Small devices (portrait tablets and large phones, 600px and up)
  @media only screen and (min-width: 600px) {
    padding: 0 1.1rem;
  }
`;
