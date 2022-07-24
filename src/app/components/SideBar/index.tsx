import * as React from 'react';
import styled from 'styled-components/macro';
import { Logo } from './Logo';
import { Nav } from './Nav';
import { Upgrade } from '../Upgrade';

export function SideBar() {
  return (
    <Wrapper>
      <Logo />
      <Divider />
      <Nav />
      <Upgrade />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  position: fixed;
  left: 0px;
  top: 0px;
  bottom: 0px;
  width: 252px;
  height: 100%
  display: flex;
  gap: 36px;
  flex-direction: column;
  padding: 36px 28px 32px;
  box-sizing: border-box;
  background-color: rgba(86, 105, 147, 0.024);
  border-right: 1px solid ${p => p.theme.borderLight};
  padding: 0.8rem;
  padding-top: 0;
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

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Divider = styled.div`
  height: 0.05rem;
  width: 100%;
  background-color: ${p => p.theme.borderLight};
`;
