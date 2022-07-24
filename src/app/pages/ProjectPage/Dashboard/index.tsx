import * as React from 'react';

import { H1 } from 'app/components/common/typography/H1';
import styled from 'styled-components/macro';
import { H4 } from 'app/components/common/typography/H4';
import { P } from '../components/P';
import Chip from '@mui/material/Chip';

import im from './assets/preview.jpeg';
import { Card } from './components/Card';
import { PageContainer } from 'app/components/common/layout/PageContainer';
import { gql, useQuery } from '@apollo/client';
import { Label } from 'app/components/common/feedback/Label';

const SITE = gql`
  query ($id: ID!) {
    site(id: $id) {
      data {
        attributes {
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
  const id = 2;
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
              href={data.site.data.attributes.siteUrl}
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
            <Label>site url</Label>
            <Link>{data.site.data.attributes.siteUrl}</Link>
          </Column>
          <Column>
            <Label>status</Label>
            <Chip label={data.site.data.attributes.status} variant="outlined" />
          </Column>
        </Card>
      </Content>
    </PageContainer>
  );
}

const Content = styled.div`
  width: 100%;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Preview = styled.a``;

const Img = styled.img`
  width: 100%;
  height: 104px;
  width: 168px;

  position: relative;
  overflow: hidden;
  border-radius: 4px;
`;

const Link = styled.a`
  padding: 0.5rem;
`;
