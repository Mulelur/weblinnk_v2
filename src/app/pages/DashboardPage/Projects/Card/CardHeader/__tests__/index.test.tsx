import * as React from 'react';
import { Store } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styles/theme/ThemeProvider';
import { HelmetProvider } from 'react-helmet-async';
import { configureAppStore } from 'store/configureStore';
import { CardHeader } from '..';

const renderCard = (store: Store) =>
  render(
    <Provider store={store}>
      <ThemeProvider>
        <HelmetProvider>
          <CardHeader siteName="New Site" />
        </HelmetProvider>
      </ThemeProvider>
    </Provider>,
  );

describe('<CardHeader />', () => {
  let component: ReturnType<typeof renderCard>;

  beforeEach(() => {
    const store = configureAppStore();
    component = renderCard(store);
  });

  it('should match snapshot', () => {
    expect(component.container).toMatchSnapshot();
  });

  it('should render the title', () => {
    expect(component.getByText('Projects')).toBeInTheDocument();
  });
});
