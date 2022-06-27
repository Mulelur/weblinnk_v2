import * as React from 'react';
import { CardContent } from '..';
import { createRenderer } from 'react-test-renderer/shallow';

const shallowRenderer = createRenderer();

describe('<CardContent />', () => {
  it('should render and match the snapshot', () => {
    shallowRenderer.render(<CardContent />);
    const renderedOutput = shallowRenderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
