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

const Wrapper = styled.div`
  // box-shadow: 0 1px 0 0 ${p => p.theme.borderLight};
  // height: ${StyleConstants.NAV_BAR_HEIGHT};
  height: 100%;
  width: 15rem;
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

  position: fixed;
  left: 0px;
  top: 0px;
  bottom: 0px;
  width: 252px;
  display: flex;
  gap: 36px;
  flex-direction: column;
  padding: 36px 28px 32px;
  box-sizing: border-box;
  background-color: rgba(86, 105, 147, 0.024);

  border-right: 1px solid rgba(58, 52, 51, 0.05);
`;

const Divider = styled.div`
  height: 0.1rem;
  width: 100%;
  background-color: ${p => p.theme.borderLight};
  margin: 1.3rem 0 0 0;
`;
