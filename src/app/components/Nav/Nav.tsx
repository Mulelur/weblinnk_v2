import * as React from 'react';
import styled from 'styled-components/macro';
import { ReactComponent as SearchIcon } from './assets/account-icon.svg';
import { ReactComponent as BellIcon } from './assets/bell-icon.svg';

export function Nav() {
  return (
    <Wrapper>
      <Item
        href="https://cansahin.gitbook.io/react-boilerplate-cra-template/"
        target="_blank"
        title="Documentation Page"
        rel="noopener noreferrer"
      >
        <SearchIcon />
      </Item>
      <Item
        href="https://github.com/react-boilerplate/react-boilerplate-cra-template"
        target="_blank"
        title="Github Page"
        rel="noopener noreferrer"
      >
        <BellIcon />
      </Item>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  margin-right: -1rem;
  color: ${p => p.theme.primary};
`;

const Item = styled.a`
  color: ${p => p.theme.primary};
  cursor: pointer;
  text-decoration: none;
  display: flex;
  padding: 0.25rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  align-items: center;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.4;
  }

  .icon {
    margin-right: 0.25rem;
  }
`;
