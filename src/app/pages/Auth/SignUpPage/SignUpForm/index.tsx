import * as React from 'react';
import { PrimaryButton } from 'app/components/common/buttons/primary';
import { Input } from 'app/components/common/feedback/Input';
import { Label } from 'app/components/common/feedback/Label';
import { H1 } from 'app/components/common/typography/H1';
import { H4 } from 'app/components/common/typography/H4';
import { P } from 'app/components/common/typography/P/P';
import { Link } from 'app/components/Link';
import styled from 'styled-components/macro';
import { useNavigate } from 'react-router-dom';

import { gql, useMutation } from '@apollo/client';

const CREATE_USER = gql`
  mutation ($input: UsersPermissionsRegisterInput!) {
    register(input: $input) {
      jwt
    }
  }
`;

type RequestData = {
  username: HTMLInputElement | null;
  password: HTMLInputElement | null;
  email: HTMLInputElement | null;
};

export function SignUpForm() {
  const navigate = useNavigate();
  const [createTemplate, { data: D, loading: L, error: E }] =
    useMutation(CREATE_USER);

  // save jwt to local storage
  if (D) {
    localStorage.setItem('jwt', D.register.jwt);

    navigate('/');
  }

  if (L) return <>'Loading...'</>;
  if (E) return <>`Error! ${E.message}`</>;

  let reqData: RequestData = {
    username: null,
    password: null,
    email: null,
  };

  const createTemplateHandler = () => {
    createTemplate({
      variables: {
        input: {
          username: reqData.username?.value,
          password: reqData.password?.value,
          email: reqData.email?.value,
        },
      },
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    createTemplateHandler();

    reqData = {
      username: null,
      password: null,
      email: null,
    };
  };

  return (
    <>
      <Wrapper>
        <Content>
          <H1>Sign Up</H1>
          <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</P>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>Username</Label>
              <Input
                ref={node => {
                  reqData.username = node;
                }}
                type="text"
                placeholder="Enter username"
              />
            </FormGroup>
            <FormGroup>
              <Label>Email</Label>
              <Input
                ref={node => {
                  reqData.email = node;
                }}
                type="email"
                placeholder="Enter email"
              />
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input
                ref={node => {
                  reqData.password = node;
                }}
                type="password"
                placeholder="Enter your password"
              />
            </FormGroup>
            <FormGroup>
              <H4>Keep me log in</H4>
            </FormGroup>
            <FormGroup>
              <PrimaryButton>Sign In</PrimaryButton>
            </FormGroup>
          </Form>
          <P>
            Don't have an account?
            <Link to={process.env.PUBLIC_URL + '/signin'}>Sign In</Link>
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
  padding-bottom: 1rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  // &:not(:first-child) {
  //   padding-top: 0.8rem;
  // }
`;
