import * as React from 'react';

import { H1 } from 'app/components/common/typography/H1';
import styled from 'styled-components/macro';

import { Card } from './components/Card';
import { Label } from 'app/components/common/feedback/Label';
import { Gap } from 'app/components/common/layout/Gap';
import { Row } from 'app/components/common/layout/Row';
import { Form, FormGroup } from 'app/pages/Auth/SignInPage/SignInForm';
import { Input } from 'app/components/common/feedback/Input';
import { P } from 'app/components/common/typography/P/P';

export function Settings() {
  return (
    <Container>
      <Content>
        <H1>Site Settings</H1>
        <P>Set Your Site Settings here!</P>
        <Card>
          <Column>
            <H1>Site Details</H1>
            <Divider />
            <Form>
              <Row>
                <FormGroup>
                  <Label>Link 1</Label>
                  <Input type="text" placeholder="Enter something here!" />
                </FormGroup>
                <Gap />
                <FormGroup>
                  <Label>Link 2</Label>
                  <Input type="text" placeholder="Enter something here!" />
                </FormGroup>
              </Row>
              <FormGroup>
                <Label>Link 1</Label>
                <Input type="text" placeholder="Enter something here!" />
              </FormGroup>
            </Form>
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

const Divider = styled.div`
  border: 1px solid ${p => p.theme.borderLight};
  height: 1px;
  width: 100%;
  margin: 1.5rem 0;
`;

const Content = styled.div`
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
