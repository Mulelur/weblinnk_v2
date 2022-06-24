import * as React from 'react';
import { render } from '@testing-library/react';

import { DefaultTheme } from 'styled-components';
import { themes } from 'styles/theme/themes';

import { Button } from '../Button';

const renderWithTheme = (theme: DefaultTheme) =>
  render(<Button theme={theme} />);

describe('<Button />', () => {
  it('should render without crashing', () => {
    const { container } = render(<Button />);
    expect(container).toBeTruthy();
  });

  it('should use theme from props', () => {
    let comp = renderWithTheme(themes.light);
    expect(comp.container.firstChild).toHaveStyle(
      `background-color: ${themes.light.primary}`,
    );
    comp = renderWithTheme(themes.dark);
    expect(comp.container.firstChild).toHaveStyle(
      `background-color: ${themes.dark.primary}`,
    );
  });
});
