import * as React from 'react';
import { Store } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styles/theme/ThemeProvider';
import { HelmetProvider } from 'react-helmet-async';
import { configureAppStore } from 'store/configureStore';
import { CardMedia } from '..';

const renderCard = (store: Store) =>
  render(
    <Provider store={store}>
      <ThemeProvider>
        <HelmetProvider>
          <CardMedia category="Portfolio" />
        </HelmetProvider>
      </ThemeProvider>
    </Provider>,
  );

describe('<CardMedia />', () => {
  let component: ReturnType<typeof renderCard>;

  beforeEach(() => {
    const store = configureAppStore();
    component = renderCard(store);
  });

  it('should match snapshot', () => {
    expect(component.container).toMatchSnapshot();
  });

  // test if the component renders a image
  it('should render an image', () => {
    expect(component.getByRole('img')).toBeInTheDocument();
  });
});
