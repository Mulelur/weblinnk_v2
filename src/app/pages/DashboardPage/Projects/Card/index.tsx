import React from 'react';
import styled from 'styled-components/macro';
import { CardActions } from './CardActions';
import { CardContent } from './CardContent';
import { CardHeader } from './CardHeader';
import { CardMedia } from './CardMedia';

type Props = {
  imageSrc: string;
};

export function Card(props: Props) {
  const { imageSrc } = props;
  return (
    <Wrapper>
      <CardHeader />
      <CardMedia src={imageSrc} />
      <CardContent />
      <CardActions />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 28rem;
  border-radius: 0.75rem;
  background-color: ${p => p.theme.background};
  border: 1px solid ${p => p.theme.borderLight};
  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.1),
    0px 2px 4px -1px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  @media only screen and (max-width: 600px) {
    width: 21rem;
  }

  // Small devices (portrait tablets and large phones, 600px and up)
  @media only screen and (min-width: 600px) {
    width: 22rem;
  }

  // Medium devices (landscape tablets, 768px and up)
  @media only screen and (min-width: 768px) {
    width: 23rem;
  }

  // Large devices (laptops/desktops, 992px and up)
  @media only screen and (min-width: 992px) {
    width: 26rem;
  }

  // Extra large devices (large laptops and desktops, 1200px and up)
  @media only screen and (min-width: 1200px) {
    width: 28rem;
  }
`;
