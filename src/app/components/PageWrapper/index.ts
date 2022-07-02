import styled from 'styled-components/macro';

export const PageWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 1.5rem;
  box-sizing: content-box;

  @media only screen and (max-width: 600px) {
    padding: 0 1rem;
  }

  // Small devices (portrait tablets and large phones, 600px and up)
  @media only screen and (min-width: 600px) {
    padding: 0 1.5rem;
  }

  // Medium devices (landscape tablets, 768px and up)
  @media only screen and (min-width: 768px) {
    padding: 0 2rem;
  }

  // Large devices (laptops/desktops, 992px and up)
  @media only screen and (min-width: 992px) {
    padding: 0 2.5rem;
  }

  // Extra large devices (large laptops and desktops, 1200px and up)
  @media only screen and (min-width: 1200px) {
    padding: 0 3rem;
  }
`;
