import * as React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { themes } from 'styles/theme/themes';
import { HelmetProvider } from 'react-helmet-async';
import renderer from 'react-test-renderer';
import { Link } from 'app/components/Link';

import { ProfilePage } from '..';

const renderPage = () =>
  renderer.create(
    <MemoryRouter>
      <ThemeProvider theme={themes.light}>
        <HelmetProvider>
          <ProfilePage />
        </HelmetProvider>
      </ThemeProvider>
    </MemoryRouter>,
  );

describe('<ProfilePage />', () => {
  it('should match snapshot', () => {
    const notFoundPage = renderPage();
    expect(notFoundPage.toJSON()).toMatchSnapshot();
  });

  it('should should contain Link', () => {
    const notFoundPage = renderPage();
    expect(notFoundPage.root.findByType(Link)).toBeDefined();
  });
});
