import * as React from 'react';
import { render } from '@testing-library/react';
import { themes } from 'styles/theme/themes';
import { DefaultTheme } from 'styled-components';
import { H4 } from '../index';

const renderWithTheme = (theme?: DefaultTheme) =>
  render(<H4 theme={theme || themes.light} />);

describe('<H4 />', () => {
  it('should match snapshot', () => {
    const { container } = render(<H4 />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render a h4 tag', () => {
    const { container } = renderWithTheme();
    expect(container.querySelector('h4')).toBeInTheDocument();
  });

  it('should have the correct theme', () => {
    const { container } = render(<H4 theme={themes.light} />);
    expect(container.firstChild).toHaveStyle(`color: ${themes.light.text}`);
  });
});
