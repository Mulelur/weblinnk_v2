import styled from 'styled-components/macro';

export const Card = styled.div`
  border-radius: 8px;
  border-color: ${p => p.theme.borderLight};
  background-color: ${p => p.theme.background};
  box-shadow: ${p => p.theme.primary} 0px 0px 0px 1px inset,
    rgb(38 38 44 / 7%) 0px 1px 3px;

  padding: 0.5rem 1.3rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
