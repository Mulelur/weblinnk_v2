import * as React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';

import { DashboardPage } from '..';

const shallowRenderer = createRenderer();

describe('<DashboardPage />', () => {
  it('should render and match the snapshot', () => {
    shallowRenderer.render(<DashboardPage />);
    const renderedOutput = shallowRenderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
