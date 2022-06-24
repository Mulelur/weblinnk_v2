import { PrimaryButton } from 'app/components/common/buttons/primary';
import { Input } from 'app/components/common/feedback/Input';
import { Label } from 'app/components/common/feedback/Label';
import { H1 } from 'app/components/common/typography/H1';
import { H4 } from 'app/components/common/typography/H4';
import { Link } from 'app/components/Link';
import { P } from 'app/pages/Dashboard/components/P';
import * as React from 'react';
import styled from 'styled-components/macro';

export function SignInForm() {
  return (
    <>
      <Wrapper>
        <Content>
          <H1>Sign In</H1>
          <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</P>
          <Form>
            <FormGroup>
              <Label>Email</Label>
              <Input type="email" placeholder="Enter email" />
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input type="password" placeholder="Enter your password" />
            </FormGroup>
            <FormGroup>
              <H4>Keep me log in</H4>
            </FormGroup>
            <FormGroup>
              <PrimaryButton>Sign In</PrimaryButton>
            </FormGroup>
          </Form>
          <P>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </P>
        </Content>
      </Wrapper>
    </>
  );
}

export const Wrapper = styled.div`
  padding-top: 4rem;
  padding-bottom: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  max-width: 28rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  width: 100%;
  padding-bottom: 2rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  &:not(:first-child) {
    padding-top: 0.8rem;
  }
`;
