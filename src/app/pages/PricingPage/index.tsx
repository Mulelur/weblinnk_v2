import * as React from 'react';
import styled from 'styled-components/macro';
import { Helmet } from 'react-helmet-async';
import { StyleConstants } from 'styles/StyleConstants';
import { H1 } from 'app/components/common/typography/H1';
import { P } from '../NotFoundPage/P';
import { PricingCard } from './PricingCard';
import { NavBar } from 'app/components/NavBar';

const price = {
  title: 'Guardian',
  subTitle: "What You'll Get",
  benefits: ['lorem lepsum', 'lorem lepsum ol rome'],
  price: 'Free Forever',
  interval: '',
};

export function PricingPage() {
  return (
    <>
      <Helmet>
        <title>Pricing</title>
        <meta name="description" content="Page not found" />
      </Helmet>
      <NavBar />
      <Wrapper>
        <H1>Get The Right Plan For You</H1>
        <P>All plans including 14-days free trial from us</P>
        <PricingCard price={price} />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  height: calc(100vh - ${StyleConstants.NAV_BAR_HEIGHT});
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  // min-height: 320px;
`;
