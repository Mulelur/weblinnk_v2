import * as React from 'react';

import { H1 } from 'app/components/common/typography/H1';
import styled from 'styled-components/macro';
import { H4 } from 'app/components/common/typography/H4';
import { P } from '../components/P';

import im from './assets/preview.jpeg';
import { Card } from './components/Card';

export function Dashboard() {
  return (
    <Container>
      <Content>
        <H1>Get started, Rotonda!</H1>
        <Card>
          <Column>
            <Column>
              <H4>Hello</H4>
              <P>Your new site</P>
            </Column>
            {/* <StolenButton>View</StolenButton> */}
          </Column>
          <Column>
            <Preview
              href="https://loving-minsky-0f15f1.netlify.app/"
              target="_blank"
              title="Preview"
              rel="noopener noreferrer"
            >
              <Img src={im} />
            </Preview>
          </Column>
        </Card>
        <H1>Project Settings</H1>
        <Card>
          <Column>overview</Column>
        </Card>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  width: 884px;
  margin: 1rem auto;
  padding: 0 1.5rem;
  box-sizing: content-box;
`;

const Content = styled.div`
  // display: flex;
  width: 100%;
`;

const Text = styled.p``;

const Column = styled.div``;

const Preview = styled.a``;

const Img = styled.img`
  width: 100%;
  height: 104px;
  width: 168px;

  position: relative;
  overflow: hidden;
  border-radius: 4px;
`;
