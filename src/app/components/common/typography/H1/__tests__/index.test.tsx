import * as React from 'react';
import { render } from '@testing-library/react';

import { H1 } from '../index';
import { themes } from 'styles/theme/themes';
import { DefaultTheme } from 'styled-components';

const renderWithTheme = (theme?: DefaultTheme) =>
  render(<H1 theme={theme || themes.light} />);

describe('<H1 />', () => {
  it('should render an <h1> tag', () => {
    const a = renderWithTheme();
    expect(a.container.querySelector('h1')).toBeInTheDocument();
  });

  // test if the component have the correct theme
  it('should have the correct theme', () => {
    const h1 = renderWithTheme();
    expect(h1.container.firstChild).toHaveStyle(`color: ${themes.light.text}`);
  });
});
