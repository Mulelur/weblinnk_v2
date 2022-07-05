import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from 'app/components/NavBar';

import { PageWrapper } from 'app/components/PageWrapper';
import { NotifyMe } from './NotifiyMe';

export function ComingSoonPage() {
  return (
    <>
      <Helmet>
        <title>ComingSoon Page</title>
        <meta
          name="description"
          content="A React Boilerplate application homepage"
        />
      </Helmet>
      <NavBar />
      <PageWrapper>
        <NotifyMe />
      </PageWrapper>
    </>
  );
}
