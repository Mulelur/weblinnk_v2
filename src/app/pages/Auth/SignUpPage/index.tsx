import * as React from 'react';
import { Helmet } from 'react-helmet-async';

import { PageWrapper } from 'app/components/PageWrapper';
import { SignUpForm } from './SignUpForm';

export function SignUpPage() {
  return (
    <>
      <Helmet>
        <title>Sign Up</title>
        <meta name="description" content="Sign in page" />
      </Helmet>

      <PageWrapper>
        <SignUpForm />
      </PageWrapper>
    </>
  );
}
