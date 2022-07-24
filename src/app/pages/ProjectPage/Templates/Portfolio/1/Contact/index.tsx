import * as React from 'react';
import { H4 } from 'app/components/common/typography/H4';
import styled from 'styled-components/macro';
import { Column } from 'app/components/common/layout/Column';
import { Row } from 'app/components/common/layout/Row';
import { Label } from 'app/components/common/feedback/Label';
import { Input } from 'app/components/common/feedback/Input';
// import { ReactComponent as AboutMeIcon } from './assets/aboutMe-icon.svg';
import { Card } from 'app/pages/ProjectPage/Dashboard/components/Card';
import { Form, FormGroup } from 'app/pages/Auth/SignInPage/SignInForm';
import { PageContainer } from 'app/components/common/layout/PageContainer';

import { gql, useMutation, useQuery } from '@apollo/client';
import { PrimaryButton } from 'app/components/common/buttons/primary';

const UPDATE_CONTACT_PAGE = gql`
  mutation ($data: TemplateInput!) {
    updateTemplate(id: 2, data: $data) {
      data {
        id
      }
    }
  }
`;

const GET_TEMPLATE_ABOUT_PAGE = gql`
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

export function ContactCard() {
  let input: {
    title1: HTMLInputElement | null;
    title2: HTMLInputElement | null;
    text1: HTMLInputElement | null;
    email: HTMLInputElement | null;
    phone: HTMLInputElement | null;
  } = {
    title1: null,
    title2: null,
    text1: null,
    email: null,
    phone: null,
  };

  const updateContactPageHandler = () => {
    updateContactPage({
      variables: {
        data: {
          pages: {
            contactPage: {
              title1: input.title1?.value,
              title2: input.title2?.value,
              text1: input.text1?.value,
              email: input.email?.value,
              phone: input.phone?.value,
            },
            homePage: {
              title1:
                contactPage.template.data.attributes.pages.homePage.title1,
              title2:
                contactPage.template.data.attributes.pages.homePage.title2,
              title3:
                contactPage.template.data.attributes.pages.homePage.title3,
              link1: contactPage.template.data.attributes.pages.homePage.link1,
              link2: contactPage.template.data.attributes.pages.homePage.link2,
            },
            aboutPage: {
              // ...homePage.template.data.attributes.pages.aboutPage,
              title1:
                contactPage.template.data.attributes.pages.aboutPage.title1,
              title2:
                contactPage.template.data.attributes.pages.aboutPage.title2,
              text1: contactPage.template.data.attributes.pages.aboutPage.text1,
            },
          },
        },
      },
    });
  };

  const [updateContactPage, { data, loading, error }] =
    useMutation(UPDATE_CONTACT_PAGE);

  const {
    loading: L,
    error: E,
    data: contactPage,
  } = useQuery(GET_TEMPLATE_ABOUT_PAGE);

  if (L) return <>'Loading...'</>;
  if (E) return <>`Error! ${E.message}`</>;

  if (loading) return <>'Submitting...'</>;
  if (error) return <>`Submission error! ${error.message}`</>;

  console.log(data);

  console.log(contactPage);

  const handleSubmit = async e => {
    e.preventDefault();

    updateContactPageHandler();

    input = {
      title1: null,
      title2: null,
      text1: null,
      email: null,
      phone: null,
    };
  };

  return (
    <PageContainer>
      <Card>
        <Content>
          <Header>
            <IconWrapper></IconWrapper>
            <H4>Contact page</H4>
          </Header>
          <Row>
            <Column>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label>Title 1</Label>
                  <Input
                    ref={node => {
                      input.title1 = node;
                    }}
                    type="text"
                    placeholder={
                      contactPage.template.data.attributes.pages.contactPage
                        .title1
                    }
                    defaultValue={
                      contactPage.template.data.attributes.pages.contactPage
                        .title1
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
                      contactPage.template.data.attributes.pages.contactPage
                        .title2
                    }
                    defaultValue={
                      contactPage.template.data.attributes.pages.contactPage
                        .title2
                    }
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Text 1</Label>
                  <Input
                    ref={node => {
                      input.text1 = node;
                    }}
                    type="text"
                    placeholder={
                      contactPage.template.data.attributes.pages.contactPage
                        .text1
                    }
                    defaultValue={
                      contactPage.template.data.attributes.pages.contactPage
                        .text1
                    }
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Email</Label>
                  <Input
                    ref={node => {
                      input.email = node;
                    }}
                    type="text"
                    placeholder={
                      contactPage.template.data.attributes.pages.contactPage
                        .text1
                    }
                    defaultValue={
                      contactPage.template.data.attributes.pages.contactPage
                        .text1
                    }
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Phone</Label>
                  <Input
                    ref={node => {
                      input.phone = node;
                    }}
                    type="text"
                    placeholder={
                      contactPage.template.data.attributes.pages.contactPage
                        .text1
                    }
                    defaultValue={
                      contactPage.template.data.attributes.pages.contactPage
                        .text1
                    }
                  />
                </FormGroup>
                <PrimaryButton>Save</PrimaryButton>
              </Form>
            </Column>
          </Row>
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
