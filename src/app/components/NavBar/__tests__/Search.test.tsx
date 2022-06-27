import * as React from 'react';
import { render } from '@testing-library/react';
import { Search } from '../Search';

describe('<Search />', () => {
  it('should match snapshot', () => {
    const logo = render(<Search />);
    expect(logo.container.firstChild).toMatchSnapshot();
  });
});
