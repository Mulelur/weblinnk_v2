import * as React from 'react';
import { H4 } from 'app/components/common/typography/H4';
import styled from 'styled-components/macro';
import { Column } from 'app/components/common/layout/Column';
import { Row } from 'app/components/common/layout/Row';
import { Label } from 'app/components/common/feedback/Label';
import { Input } from 'app/components/common/feedback/Input';
import { ReactComponent as AboutMeIcon } from './assets/aboutMe-icon.svg';
import { Card } from 'app/pages/ProjectPage/Dashboard/components/Card';
import { Form, FormGroup } from 'app/pages/Auth/SignInPage/SignInForm';
import { PageContainer } from 'app/components/common/layout/PageContainer';

import { gql, useMutation, useQuery } from '@apollo/client';
import { PrimaryButton } from 'app/components/common/buttons/primary';

type Props = {
  title: string;
};

const UPDATE_ABOUT_PAGE = gql`
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

export function AboutMeCard(props: Props) {
  const { title } = props;

  let input: {
    title1: HTMLInputElement | null;
    title2: HTMLInputElement | null;
    text1: HTMLInputElement | null;
  } = {
    title1: null,
    title2: null,
    text1: null,
  };

  const updateAboutPageHandler = () => {
    updateAboutPage({
      variables: {
        data: {
          pages: {
            aboutPage: {
              title1: input.title1?.value,
              title2: input.title2?.value,
              text1: input.text1?.value,
            },
            contactPage: {
              title1:
                aboutPage.template.data.attributes.pages.contactPage.title1,
              title2:
                aboutPage.template.data.attributes.pages.contactPage.title2,
              text1: aboutPage.template.data.attributes.pages.contactPage.text1,
              email: aboutPage.template.data.attributes.pages.contactPage.email,
              phone: aboutPage.template.data.attributes.pages.contactPage.phone,
            },
            homePage: {
              title1: aboutPage.template.data.attributes.pages.homePage.title1,
              title2: aboutPage.template.data.attributes.pages.homePage.title2,
              title3: aboutPage.template.data.attributes.pages.homePage.title3,
              link1: aboutPage.template.data.attributes.pages.homePage.link1,
              link2: aboutPage.template.data.attributes.pages.homePage.link2,
            },
          },
        },
      },
    });
  };

  const [updateAboutPage, { data, loading, error }] =
    useMutation(UPDATE_ABOUT_PAGE);

  const {
    loading: L,
    error: E,
    data: aboutPage,
  } = useQuery(GET_TEMPLATE_ABOUT_PAGE);

  if (L) return <>'Loading...'</>;
  if (E) return <>`Error! ${E.message}`</>;

  if (loading) return <>'Submitting...'</>;
  if (error) return <>`Submission error! ${error.message}`</>;

  localStorage.setItem('aboutPage', JSON.stringify(data));

  const handleSubmit = async e => {
    e.preventDefault();

    updateAboutPageHandler();

    input = {
      title1: null,
      title2: null,
      text1: null,
    };
  };

  return (
    <PageContainer>
      <Card>
        <Content>
          <Header>
            <IconWrapper>
              <AboutMeIcon />
            </IconWrapper>
            <H4>{title}</H4>
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
                      aboutPage.template.data.attributes.pages.aboutPage.title1
                    }
                    defaultValue={
                      aboutPage.template.data.attributes.pages.aboutPage.title1
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
                      aboutPage.template.data.attributes.pages.aboutPage.title2
                    }
                    defaultValue={
                      aboutPage.template.data.attributes.pages.aboutPage.title2
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
                      aboutPage.template.data.attributes.pages.aboutPage.text1
                    }
                    defaultValue={
                      aboutPage.template.data.attributes.pages.aboutPage.text1
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
