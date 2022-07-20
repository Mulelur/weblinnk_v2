import * as React from 'react';

import { H1 } from 'app/components/common/typography/H1';
import styled from 'styled-components/macro';
import { H4 } from 'app/components/common/typography/H4';
import { P } from '../components/P';

import im from './assets/preview.jpeg';
import { Card } from './components/Card';
import { PageContainer } from 'app/components/common/layout/PageContainer';
import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

const SITE = gql`
  query ($id: ID!) {
    site(id: $id) {
      data {
        attributes {
          siteId
          status
          siteUrl
          siteName
          previewUrl
          category
        }
      }
    }
  }
`;
export function Dashboard() {
  const { id } = useParams<never>();
  const { loading, error, data } = useQuery(SITE, {
    variables: {
      id,
    },
  });

  if (loading) return <>'Loading...'</>;
  if (error) return <>`Error! ${error.message}`</>;

  console.log(data);
  return (
    <PageContainer>
      <Content>
        <H1>Get started, Rotonda!</H1>
        <Card>
          <Column>
            <Column>
              <H4>{data.site.data.attributes.siteName}</H4>
              <P>Your new site</P>
            </Column>
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
          <Column>
            <P>overview</P>
          </Column>
        </Card>
      </Content>
    </PageContainer>
  );
}

const Content = styled.div`
  width: 100%;
`;

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
