import * as React from 'react';
import { H4 } from 'app/components/common/typography/H4';
import styled from 'styled-components/macro';
import { Column } from 'app/components/common/layout/Column';
import { Row } from 'app/components/common/layout/Row';
import { Label } from 'app/components/common/feedback/Label';
import { Input } from 'app/components/common/feedback/Input';
import { ReactComponent as HomeIcon } from './assets/home-icon.svg';
import { Gap } from 'app/components/common/layout/Gap';
import { Card } from 'app/pages/ProjectPage/Dashboard/components/Card';
import { Form, FormGroup } from 'app/pages/Auth/SignInPage/SignInForm';
import { PageContainer } from 'app/components/common/layout/PageContainer';

import { gql, useMutation, useQuery } from '@apollo/client';
import { PrimaryButton } from 'app/components/common/buttons/primary';

type Props = {
  title: string;
};

const UPDATE_HOME_PAGE = gql`
  mutation ($data: TemplateInput!) {
    updateTemplate(id: 2, data: $data) {
      data {
        id
      }
    }
  }
`;

const GET_TEMPLATE_HOME_PAGE = gql`
  query {
    template(id: 2) {
      data {
        attributes {
          pages {
            homePage {
              title1
              title2
              title3
              link1
              link2
            }
            aboutPage {
              title1
              title2
              text1
            }
            contactPage {
              title1
              title2
              text1
              email
              phone
            }
          }
        }
      }
    }
  }
`;

export function HomeCard(props: Props) {
  const { title } = props;

  const {
    loading: L,
    error: E,
    data: homePage,
  } = useQuery(GET_TEMPLATE_HOME_PAGE);

  let input: {
    title1: HTMLInputElement | null;
    title2: HTMLInputElement | null;
    title3: HTMLInputElement | null;
    title4: HTMLInputElement | null;
    link1: HTMLInputElement | null;
    link2: HTMLInputElement | null;
  } = {
    title1: null,
    title2: null,
    title3: null,
    title4: null,
    link1: null,
    link2: null,
  };

  const [updateHomePage, { data, loading, error }] =
    useMutation(UPDATE_HOME_PAGE);

  const updateHomePageHandler = () => {
    updateHomePage({
      variables: {
        data: {
          pages: {
            homePage: {
              title1: input.title1?.value,
              title2: input.title2?.value,
              title3: input.title3?.value,
              title4: input.title3?.value,
              link1: input.link1?.value,
              link2: input.link2?.value,
            },
            aboutPage: {
              // ...homePage.template.data.attributes.pages.aboutPage,
              title1: homePage.template.data.attributes.pages.aboutPage.title1,
              title2: homePage.template.data.attributes.pages.aboutPage.title2,
              text1: homePage.template.data.attributes.pages.aboutPage.text1,
            },
            contactPage: {
              // ...homePage.template.data.attributes.pages.contactPage,
              title1:
                homePage.template.data.attributes.pages.contactPage.title1,
              title2:
                homePage.template.data.attributes.pages.contactPage.title2,
              text1: homePage.template.data.attributes.pages.contactPage.text1,
              email: homePage.template.data.attributes.pages.contactPage.email,
              phone: homePage.template.data.attributes.pages.contactPage.phone,
            },
          },
        },
      },
    });
  };

  if (L) return <>'Loading...'</>;
  if (E) return <>`Error! ${E.message}`</>;

  console.log(homePage);

  if (loading) return <>'Submitting...'</>;

  if (error) return <>`Submission error! ${error.message}`</>;

  localStorage.setItem('homePage', JSON.stringify(data));

  const handleSubmit = async e => {
    e.preventDefault();

    updateHomePageHandler();

    input = {
      title1: null,
      title2: null,
      title3: null,
      title4: null,
      link1: null,
      link2: null,
    };
  };

  return (
    <PageContainer>
      <Card>
        <Content>
          <Header>
            <IconWrapper>
              <HomeIcon />
            </IconWrapper>
            <H4>{title}</H4>
          </Header>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Column>
                <FormGroup>
                  <Label>Title 1</Label>
                  <Input
                    ref={node => {
                      input.title1 = node;
                    }}
                    type="text"
                    placeholder={
                      homePage.template.data.attributes.pages.homePage.title1
                    }
                    defaultValue={
                      homePage.template.data.attributes.pages.homePage.title1
                    }
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Title 2</Label>
                  <Input
                    ref={node => {
                      input.title2 = node;
                    }}
                    type="text"
                    placeholder={
                      homePage.template.data.attributes.pages.homePage.title2
                    }
                    defaultValue={
                      homePage.template.data.attributes.pages.homePage.title2
                    }
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Title 3</Label>
                  <Input
                    ref={node => {
                      input.title3 = node;
                    }}
                    type="text"
                    placeholder={
                      homePage.template.data.attributes.pages.homePage.title3
                    }
                    defaultValue={
                      homePage.template.data.attributes.pages.homePage.title3
                    }
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Title 4</Label>
                  <Input
                    type="text"
                    placeholder={
                      homePage.template.data.attributes.pages.homePage.title4
                    }
                    defaultValue={
                      homePage.template.data.attributes.pages.homePage.title4
                    }
                  />
                </FormGroup>
                <Row>
                  <FormGroup>
                    <Label>Link 1</Label>
                    <Input
                      ref={node => {
                        input.link1 = node;
                      }}
                      type="text"
                      placeholder={
                        homePage.template.data.attributes.pages.homePage.link1
                      }
                      defaultValue={
                        homePage.template.data.attributes.pages.homePage.link1
                      }
                    />
                  </FormGroup>
                  <Gap />
                  <FormGroup>
                    <Label>Link 2</Label>
                    <Input
                      ref={node => {
                        input.link2 = node;
                      }}
                      type="text"
                      placeholder={
                        homePage.template.data.attributes.pages.homePage.link2
                      }
                      defaultValue={
                        homePage.template.data.attributes.pages.homePage.link2
                      }
                    />
                  </FormGroup>
                </Row>
              </Column>
            </Row>
            <PrimaryButton type="submit">Save</PrimaryButton>
          </Form>
        </Content>
      </Card>
    </PageContainer>
  );
}

const Header = styled.div`
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.div`
  height: 3.2rem;
  width: 3.2rem;
  color: ${p => p.theme.primary};
  background-color: ${p => p.theme.background};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.6rem;

  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1),
    0px 1px 2px 0px rgba(0, 0, 0, 0.06);
`;

const Content = styled.div`
  width: 100%;
`;
