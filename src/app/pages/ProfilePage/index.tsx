import * as React from 'react';
import styled from 'styled-components/macro';
import { Helmet } from 'react-helmet-async';
import { StyleConstants } from 'styles/StyleConstants';
import { H1 } from 'app/components/common/typography/H1';
import { P } from '../NotFoundPage/P';
import { Card } from '../ProjectPage/Dashboard/components/Card';
import { H4 } from 'app/components/common/typography/H4';
import { Row } from 'app/components/common/layout/Row';
import { Column } from 'app/components/common/layout/Column';
import { Form, FormGroup } from '../Auth/SignInPage/SignInForm';
import { Label } from 'app/components/common/feedback/Label';
import { Input } from 'app/components/common/feedback/Input';
import { Gap } from 'app/components/common/layout/Gap';
import { NavBar } from 'app/components/NavBar';
import { ReactComponent as SecureIcon } from './assets/secure-icon.svg';
import { StolenButton } from 'app/components/common/buttons/stolen';

export function ProfilePage() {
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
        <Container>
          <Card>
            <Content>
              <Header>
                <IconWrapper>A</IconWrapper>
                <H4>Profile</H4>
              </Header>
              <Row>
                <Column>
                  <Form>
                    <Row>
                      <FormGroup>
                        <Label>Link 1</Label>
                        <Input
                          type="text"
                          placeholder="Enter something here!"
                        />
                      </FormGroup>
                      <Gap />
                      <FormGroup>
                        <Label>Link 2</Label>
                        <Input
                          type="text"
                          placeholder="Enter something here!"
                        />
                      </FormGroup>
                    </Row>
                    <Row>
                      <FormGroup>
                        <Label>Link 1</Label>
                        <Input
                          type="text"
                          placeholder="Enter something here!"
                        />
                      </FormGroup>
                      <Gap />
                      <FormGroup>
                        <Label>Link 2</Label>
                        <Input
                          type="text"
                          placeholder="Enter something here!"
                        />
                      </FormGroup>
                    </Row>
                  </Form>
                </Column>
              </Row>
            </Content>
          </Card>
          <Gap />
          <H1>Password</H1>
          <P>You can change your Password here!</P>
          <Card>
            <Content>
              <Header>
                <IconWrapper>
                  <SecureIcon />
                </IconWrapper>
                <H4>Password</H4>
              </Header>
              <Row>
                <Column>
                  <Form>
                    <Row>
                      <FormGroup>
                        <Label>Link 1</Label>
                        <Input
                          type="text"
                          placeholder="Enter something here!"
                        />
                      </FormGroup>
                      <Gap />
                      <FormGroup>
                        <Label>Link 2</Label>
                        <Input
                          type="text"
                          placeholder="Enter something here!"
                        />
                      </FormGroup>
                    </Row>
                    <Row>
                      <FormGroup>
                        <Label>Link 1</Label>
                        <Input
                          type="text"
                          placeholder="Enter something here!"
                        />
                      </FormGroup>
                    </Row>
                  </Form>
                </Column>
              </Row>
            </Content>
          </Card>
          <Column>
            <StolenButton>Save</StolenButton>
          </Column>
        </Container>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  height: calc(100vh - ${StyleConstants.NAV_BAR_HEIGHT});
  margin-top: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

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

const Container = styled.div`
  width: 884px;
  height: 100%;
  margin: 2rem auto;
  padding: 2 1.5rem;
  box-sizing: content-box;
`;

const Content = styled.div`
  width: 100%;
`;
