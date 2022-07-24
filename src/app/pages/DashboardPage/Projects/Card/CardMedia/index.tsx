import React from 'react';
import styled from 'styled-components/macro';

type Props = {
  src?: string;
  category: string;
};

export function CardMedia(props: Props) {
  const { src, category } = props;
  return (
    <>
      <Wrapper>
        <Image src={src} />
        <Category>{category}</Category>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: 100%;
  border-radius: 0.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Category = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: max-content;
  padding: 0.75rem;
  height: 3rem;
  background-color: #fff;
  position: absolute;
  bottom: 1.8rem;
  left: 1.2rem;
  border-radius: 1.5rem;
  color: #000;
`;
