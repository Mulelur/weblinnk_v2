import { FormGroup } from '@mui/material';
import { PrimaryButton } from 'app/components/common/buttons/primary';
import { Input } from 'app/components/common/feedback/Input';
import { Column } from 'app/components/common/layout/Column';
import { Row } from 'app/components/common/layout/Row';
import { H1 } from 'app/components/common/typography/H1';
import { FormLabel } from 'app/components/FormLabel';
import { Form } from 'app/pages/Auth/SignInPage/SignInForm';
import * as React from 'react';
import styled from 'styled-components/macro';
import { StyleConstants } from 'styles/StyleConstants';
import { P } from '../components/P';
import { ReactComponent as Illus } from './assets/illus-il.svg';

export function NotifyMe() {
  return (
    <Wrapper>
      <Container>
        <Content>
          <Column>
            <Illus />
          </Column>
          <H1>Coming Soon!</H1>
          <P>We are working on this page.</P>
          <Form name="contact" method="POST" data-netlify="true">
            <FormGroup>
              <Row>
                <Input type="text" placeholder="Enter Email" />
                <Gap />
                <PrimaryButton type="submit">Notify Me</PrimaryButton>
              </Row>
            </FormGroup>
          </Form>
          <FormLabel>We will notify you when we are ready to launch</FormLabel>
        </Content>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: calc(100vh - ${StyleConstants.NAV_BAR_HEIGHT});
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 320px;
`;

const Container = styled.div`
  max-width: 545px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Gap = styled.div`
  padding: 0.5rem;
`;
