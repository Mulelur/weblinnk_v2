import * as React from 'react';
import { render } from '@testing-library/react';
import { NavBar as Nav } from '../NavBar';
import { MemoryRouter } from 'react-router-dom';

describe('<Nav />', () => {
  it('should match the snapshot', () => {
    const logo = render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>,
    );
    expect(logo.container.firstChild).toMatchSnapshot();
  });
});
