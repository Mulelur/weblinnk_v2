import * as React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';

import { Upgrade } from '..';

const shallowRenderer = createRenderer();

describe('<Upgrade />', () => {
  it('should match snapshot', () => {
    shallowRenderer.render(<Upgrade />);
    const renderedOutput = shallowRenderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
