import * as React from 'react';
import styled from 'styled-components/macro';
import { Logo } from './Logo';
import { StyleConstants } from 'styles/StyleConstants';
import { Nav } from './Nav';

export function SideBar() {
  return (
    <Wrapper>
      <Logo />
      <Divider />
      <Nav />
    </Wrapper>
  );
}

const Wrapper = styled.aside`
  // box-shadow: 0 1px 0 0 ${p => p.theme.borderLight};
  // height: ${StyleConstants.NAV_BAR_HEIGHT};
  height: 100%;
  width: 15rem;
  margin-top: -4rem;
  border-right: 1px solid ${p => p.theme.borderLight};
  padding: 0.8rem;
  background-color: ${p => p.theme.background};
  z-index: 2;

  @supports (backdrop-filter: blur(10px)) {
    backdrop-filter: blur(10px);
    background-color: ${p =>
      p.theme.background.replace(
        /rgba?(\(\s*\d+\s*,\s*\d+\s*,\s*\d+)(?:\s*,.+?)?\)/,
        'rgba$1,0.75)',
      )};
  }

  display: flex;
  flex-direction: column;
`;

const Divider = styled.div`
  height: 0.1rem;
  width: 100%;
  background-color: ${p => p.theme.borderLight};
  margin: 1.3rem 0 0 0;
`;
