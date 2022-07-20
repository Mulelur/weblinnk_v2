import * as React from 'react';
import styled from 'styled-components/macro';
import { Helmet } from 'react-helmet-async';
import { H1 } from 'app/components/common/typography/H1';
import { P } from '../NotFoundPage/P';
import { NavBar } from 'app/components/NavBar';
import { Input } from 'app/components/common/feedback/Input';
import { Form, FormGroup } from '../Auth/SignInPage/SignInForm';
import { ReactComponent as FormIcon } from './assets/Form-icon.svg';
import { ReactComponent as NextIcon } from './assets/Next-icon.svg';
import { Column } from 'app/components/common/layout/Column';

import { gql, useMutation } from '@apollo/client';

const CREATE_Template = gql`
  mutation ($data: TemplateInput!) {
    createTemplate(data: $data) {
      data {
        id
      }
    }
  }
`;

const CREATE_SITE = gql`
  mutation ($data: SiteInput!) {
    createSite(data: $data) {
      data {
        id
        attributes {
          siteId
          status
          siteUrl
          siteName
          category
          template {
            data {
              attributes {
                pages {
                  homePage {
                    id
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export function CreateSitePage() {
  let input;

  const [createSite, { data, loading, error }] = useMutation(CREATE_SITE);

  const [createTemplate, { data: D, loading: L, error: E }] =
    useMutation(CREATE_Template);

  console.log(data);

  console.log(D);

  console.log(L);

  console.log(E);

  const createSiteHandler = () => {
    createSite({
      variables: {
        data: {
          siteName: input.value,
          template: D.createTemplate.data.id,
          siteId: '12e3fq4t3w5t',
          siteUrl: 'https://app.weblinnk.com/',
          category: 'website', // "portfolio", "blog", "website"
        },
      },
    });
  };

  const createTemplateHandler = () => {
    createTemplate({
      variables: {
        data: {
          name: input.value,
        },
      },
    });
  };

  // Octokit.js
  // https://github.com/octokit/core.js#readme
  // const octokit = new Octokit({
  //   auth: 'personal-access-token123'
  // })

  // await octokit.request('POST /repos/{owner}/{repo}/git/refs', {
  //   owner: 'OWNER',
  //   repo: 'REPO',
  //   ref: 'refs/heads/featureA',
  //   sha: 'aa218f56b14c9653891f9e74264a383fa43fefbd'
  // })

  const handleSubmit = async e => {
    e.preventDefault();

    createTemplateHandler();

    // createSiteHandler();

    input.value = '';
  };

  if (loading) return <>'Submitting...'</>;

  if (error) return <>`Submission error! ${error.message}`</>;

  return (
    <>
      <Helmet>
        <title>Create Site</title>
        <meta
          name="Create-Site"
          content="Create your website in less than 5 minutes"
        />
      </Helmet>
      <NavBar />
      <Wrapper>
        <Container>
          <Content>
            <Column>
              <FormIcon />
            </Column>
            <H1>Create your website</H1>
            <P>
              let's create your new website. start by entering your new site
              name
            </P>
            <Form onSubmit={handleSubmit}>
              <FormGroup
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <Input
                  ref={node => {
                    input = node;
                  }}
                  type="text"
                  placeholder="site name"
                />
                <Button type="submit">
                  <NextIcon />
                </Button>
              </FormGroup>
            </Form>
            <P>weblinnk</P>
          </Content>
        </Container>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  height: calc(100vh - 8rem);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  // min-height: 320px;
`;

const Container = styled.div``;

const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 780px;
  text-align: center;
`;

const Button = styled.button`
  border-radius: 50%;
  border: none;
  width: 3rem;
  height: 3rem;
  margin-left: 0.5rem;
  background-color: transparent;
  color: ${p => p.theme.primary};
`;
