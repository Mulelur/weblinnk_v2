import * as React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';

const shallowRenderer = createRenderer();

describe('<ProjectPage />', () => {
  it('should render and match the snapshot', () => {
    shallowRenderer.render(<ProjectPage />);
    const renderedOutput = shallowRenderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
