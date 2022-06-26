/**
 * Asynchronously loads the component for PricingPage
 */

import * as React from 'react';
import { lazyLoad } from 'utils/loadable';
import { LoadingIndicator } from 'app/components/LoadingIndicator';

export const PricingPage = lazyLoad(
  () => import('./index'),
  module => module.PricingPage,
  {
    fallback: <LoadingIndicator />,
  },
);
