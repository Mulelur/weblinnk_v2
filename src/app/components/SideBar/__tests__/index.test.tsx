import * as React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import { SideBar } from '../index';

const shallowRenderer = createRenderer();

describe('<SideBar />', () => {
  it('should match snapshot', () => {
    shallowRenderer.render(<SideBar />);
    const renderedOutput = shallowRenderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
