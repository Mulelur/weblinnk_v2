import { FormGroup } from '@mui/material';
import { PrimaryButton } from 'app/components/common/buttons/primary';
import { Input } from 'app/components/common/feedback/Input';
import { Column } from 'app/components/common/layout/Column';
import { Row } from 'app/components/common/layout/Row';
import { H1 } from 'app/components/common/typography/H1';
import { FormLabel } from 'app/components/FormLabel';
import { LoadingIndicator } from 'app/components/LoadingIndicator';
import { Form } from 'app/pages/Auth/SignInPage/SignInForm';
import axios from 'axios';
import * as React from 'react';
import styled from 'styled-components/macro';
import { StyleConstants } from 'styles/StyleConstants';
import { P } from '../components/P';
import { ReactComponent as Illus } from './assets/illus-il.svg';
import ReCAPTCHA from 'react-google-recaptcha';

export function NotifyMe() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [email, setEmail] = React.useState('');

  const [verified, setVerified] = React.useState(false);

  function onChange(value) {
    console.log('Captcha value:', value);

    if (value) {
      console.log('Captcha value:', value);
    }
    setVerified(true);
  }

  const onChangeUsername = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(evt.currentTarget.value);
    // setIsLoading(false);
  };

  const onSubmitForm = async (evt?: React.FormEvent<HTMLFormElement>) => {
    /* istanbul ignore next  */
    if (evt !== undefined && evt.preventDefault) {
      evt.preventDefault();
    }

    setIsLoading(true);

    const payload = {
      data: {
        username: email,
      },
    };

    try {
      const response = await axios.post(
        'https://weblinnk-api.herokuapp.com/api/subscribes',
        payload,
      );
      console.log(response);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  console.log(process.env.REACT_APP_RECAPTCHA_SITE_KEY);

  return (
    <Wrapper>
      <Container>
        <Content>
          <Column>
            <Illus />
          </Column>
          <H1>Coming Soon!</H1>
          <P>We are working on this page.</P>
          <Form name="subscribe" onSubmit={onSubmitForm}>
            <FormGroup>
              <Row>
                <InputWrapper>
                  <Input
                    type="text"
                    placeholder="Enter your email"
                    value={email}
                    name="email"
                    onChange={onChangeUsername}
                  />
                  {isLoading && <LoadingIndicator small />}
                </InputWrapper>
                <Gap />
                <PrimaryButton disabled={!verified} type="submit">
                  Notify Me
                </PrimaryButton>
              </Row>
              <Gap />
              <ReCAPTCHA
                sitekey={
                  process.env.REACT_APP_RECAPTCHA_SITE_KEY ||
                  '6LdcQAUhAAAAAMdbFafVYn2nNpGy3UakoYE_WOrT'
                }
                onChange={onChange}
              />
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

const InputWrapper = styled.div`
  display: flex;
  align-items: center;

  ${Input} {
    width: 100%;
    margin-right: 0.5rem;
  }
`;
