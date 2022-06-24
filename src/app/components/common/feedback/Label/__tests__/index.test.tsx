import * as React from 'react';
import { render } from '@testing-library/react';

import { Label } from '../index';
import { themes } from 'styles/theme/themes';
import { DefaultTheme } from 'styled-components';

const renderWithTheme = (theme?: DefaultTheme) =>
  render(<Label theme={theme || themes.light} />);

describe('<Label />', () => {
  it('should render an <label> tag', () => {
    const label = renderWithTheme();
    expect(label.container.querySelector('label')).toBeInTheDocument();
  });

  it('should have theme', () => {
    const a = renderWithTheme();
    expect(a.container.firstChild).toHaveStyle(
      `color: ${themes.light.textSecondary}`,
    );
  });
});
