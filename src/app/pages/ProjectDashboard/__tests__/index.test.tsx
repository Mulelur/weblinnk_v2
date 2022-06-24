import * as React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';

import { ProjectDashboardPage } from '..';

const shallowRenderer = createRenderer();

describe('<ProjectDashboardPage />', () => {
  it('should render and match the snapshot', () => {
    shallowRenderer.render(<ProjectDashboardPage />);
    const renderedOutput = shallowRenderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
