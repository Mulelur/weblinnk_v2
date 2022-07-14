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

export function CreateSitePage() {
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
            <Form>
              <FormGroup
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <Input type="text" placeholder="site name" />
                <Button>
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
