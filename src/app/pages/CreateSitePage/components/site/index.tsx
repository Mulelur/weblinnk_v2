import * as React from 'react';
import styled from 'styled-components/macro';
import { H1 } from 'app/components/common/typography/H1';
import { Input } from 'app/components/common/feedback/Input';
import { ReactComponent as FormIcon } from './assets/Form-icon.svg';
import { ReactComponent as NextIcon } from './assets/Next-icon.svg';

import { Column } from 'app/components/common/layout/Column';

import { gql, useMutation } from '@apollo/client';
import { Form } from 'app/pages/Auth/SignInPage/SignInForm';
import { P } from 'app/pages/NotFoundPage/P';
import { LoadingIndicator } from 'app/components/LoadingIndicator';

type Props = {
  templateId: number;
  handleNext: () => void;
};

const CREATE_SITE = gql`
  mutation ($data: SiteInput!) {
    createSite(data: $data) {
      data {
        id
        attributes {
          status
          siteUrl
          siteName
          category
        }
      }
    }
  }
`;

export default function CreateSite({ templateId, handleNext }: Props) {
  let input;

  const [createSite, { data, loading, error }] = useMutation(CREATE_SITE);

  React.useEffect(() => {
    if (loading) {
      handleNext();
    }
  }, [loading, data, handleNext]);

  const createSiteHandler = () => {
    createSite({
      variables: {
        data: {
          siteName: input.value,
          template: templateId,
          siteUrl: 'https://app.weblinnk.com/',
          category: 'website', // "portfolio", "blog", "website"
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

    createSiteHandler();

    input.value = '';
  };

  if (loading) return <>'Submitting...'</>;

  if (error) return <>`Submission error! ${error.message}`</>;

  return (
    <>
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
                {loading ? (
                  <LoadingIndicator />
                ) : (
                  <Button type="submit">
                    <NextIcon />
                  </Button>
                )}
              </FormGroup>
            </Form>
          </Content>
        </Container>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div``;

const Container = styled.div``;

const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 780px;
  text-align: center;
`;

const FormGroup = styled.div`
  display: flex;
  flex-wrap: none;
  flex-direction: row;
  align-items: center;
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
