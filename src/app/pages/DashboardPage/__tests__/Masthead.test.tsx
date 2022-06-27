import * as React from 'react';
import { ToolBar } from '../ToolBar';
import { createRenderer } from 'react-test-renderer/shallow';

const shallowRenderer = createRenderer();

describe('<ToolBar />', () => {
  it('should render and match the snapshot', () => {
    shallowRenderer.render(<ToolBar />);
    const renderedOutput = shallowRenderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
