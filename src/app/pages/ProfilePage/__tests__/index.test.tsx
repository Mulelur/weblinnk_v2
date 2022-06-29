import * as React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { themes } from 'styles/theme/themes';
import { HelmetProvider } from 'react-helmet-async';
import renderer from 'react-test-renderer';

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
});
