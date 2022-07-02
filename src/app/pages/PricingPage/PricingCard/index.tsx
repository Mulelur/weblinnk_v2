import * as React from 'react';
import { PrimaryButton } from 'app/components/common/buttons/primary';
import { H1 } from 'app/components/common/typography/H1';
import { P } from 'app/pages/NotFoundPage/P';
import styled from 'styled-components/macro';

type Props = {
  price: {
    title: string;
    subTitle: string;
    benefits: string[];
    price: string;
    interval: string;
  };
};

export function PricingCard(props: Props) {
  const { price } = props;
  return (
    <Container>
      <Content>
        <Card>
          <H1>{price.title}</H1>
          <P>{price.subTitle}</P>
          <List>
            {price.benefits.length > 0 &&
              price.benefits.map(item => {
                return (
                  <>
                    <ListItem>{item}</ListItem>
                  </>
                );
              })}
          </List>
          <Divider />
          <Price>
            {price.price}
            <Span>{price.interval}</Span>
          </Price>
          <PrimaryButton>Choose</PrimaryButton>
        </Card>
      </Content>
    </Container>
  );
}

const Container = styled.div``;

const Content = styled.div``;

const Card = styled.div`
  width: 20rem;
  height: 27rem;
  background-color: ${p => p.theme.background};

  padding: 1.4rem;
  border-radius: 1rem;
  border: 1px solid ${p => p.theme.primary};

  display: flex;
  flex-direction: column;

  box-shadow: 0px 12px 24px rgba(44, 39, 56, 0.04),
    0px 24px 48px rgba(44, 39, 56, 0.08);
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  margin-bottom: 0.6rem;
`;

const H = 'O';

const ListItem = styled.li`
  list-style: none;
  padding: 0.5rem 2.5rem;
  position: relative;

  &::after {
    color: #fff;
    content: '${H}';
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${p => p.theme.primary};
    position: absolute;
    top: 5px;
    left: 0;
  }
`;

const Divider = styled.span`
  border: 1px dashed #efefef;
  margin-bottom: auto;
`;

const Price = styled.h4``;

const Span = styled.span``;
