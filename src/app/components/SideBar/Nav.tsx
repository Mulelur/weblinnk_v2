import * as React from 'react';
import styled from 'styled-components/macro';
import { ReactComponent as Dashboard } from './assets/dashboard-icon.svg';
import { ReactComponent as SettingsIcon } from './assets/settings-icon.svg';

export function Nav() {
  return (
    <Wrapper>
      <List>
        <ListItem>
          <Item
            href="/dashboard/1"
            target="_blank"
            title="Documentation Page"
            rel="noopener noreferrer"
          >
            <Dashboard />
            Home
          </Item>
        </ListItem>
        <ListItem>
          <Item
            href="https://github.com/react-boilerplate/react-boilerplate-cra-template"
            target="_blank"
            title="Github Page"
            rel="noopener noreferrer"
          >
            <SettingsIcon />
            Setting
          </Item>
        </ListItem>
      </List>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: -1rem;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  padding: 0.5rem 0;
  margin: 0.2rem 1rem 0.2rem 0;
  &:hover {
    opacity: 0.8;
    background-color: rgb(0 0 0 / 90%);
    border-radius: 0.25rem;
  }
  list-style: none;
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

  // &:hover {
  //   opacity: 0.8;
  // }

  // &:active {
  //   opacity: 0.4;
  // }

  &:hover,
  ${ListItem} {
    color: #ffff;
  }

  .icon {
    margin-right: 0.25rem;
  }
`;
