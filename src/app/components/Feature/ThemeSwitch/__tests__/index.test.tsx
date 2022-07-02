import * as React from 'react';
import { render } from '@testing-library/react';

import { ThemeSwitch } from '..';
import { Provider } from 'react-redux';
import { configureAppStore } from 'store/configureStore';
import { Store } from '@reduxjs/toolkit';
import { ThemeProvider } from 'styles/theme/ThemeProvider';

const renderThemeSwitch = (store: Store) =>
  render(
    <Provider store={store}>
      <ThemeProvider>
        <ThemeSwitch />
      </ThemeProvider>
    </Provider>,
  );
describe('<ThemeSwitch />', () => {
  let store: ReturnType<typeof configureAppStore>;

  beforeEach(() => {
    store = configureAppStore();
  });

  it.skip('should have 1 switch buttons', () => {
    const languageSwitch = renderThemeSwitch(store);
    expect(languageSwitch.queryByRole('checkbox')).toBe(1);
    languageSwitch.unmount();
  });

  it.skip('should switch theme on click', () => {
    const languageSwitch = renderThemeSwitch(store);
    const switchButton = languageSwitch.queryByTestId(
      'checkbox',
    ) as HTMLInputElement;

    expect(switchButton.checked).toBe(true);
  });
});
