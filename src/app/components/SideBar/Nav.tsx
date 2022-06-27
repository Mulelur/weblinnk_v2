import * as React from 'react';
import styled from 'styled-components/macro';
import { P } from '../common/typography/P/P';
import { ReactComponent as Dashboard } from './assets/dashboard-icon.svg';
import { ReactComponent as HomeIcon } from './assets/home-icon.svg';
import { ReactComponent as SettingsIcon } from './assets/settings-icon.svg';
import { ReactComponent as UserIcon } from './assets/user-icon.svg';
import { ReactComponent as BrowserIcon } from './assets/browser-icon.svg';

export function Nav() {
  return (
    <Wrapper>
      <P>Site Settings</P>
      <List>
        <ListItem>
          <Item
            href={process.env.PUBLIC_URL + '/project/1'}
            title="Documentation Page"
            rel="noopener noreferrer"
          >
            <Dashboard />
            <ListTitle>Dashboard</ListTitle>
          </Item>
        </ListItem>
        <ListItem>
          <Item
            href={process.env.PUBLIC_URL + '/profile'}
            title="Documentation Page"
            rel="noopener noreferrer"
          >
            <UserIcon />
            <ListTitle>Profile</ListTitle>
          </Item>
        </ListItem>
        <ListItem>
          <Item
            href={process.env.PUBLIC_URL + '/project/1/settings'}
            title="Github Page"
            rel="noopener noreferrer"
          >
            <SettingsIcon />
            <ListTitle>Setting</ListTitle>
          </Item>
        </ListItem>
      </List>

      {/* //////////// */}

      <P>Page Settings</P>
      <List>
        <ListItem>
          <Item
            href={process.env.PUBLIC_URL + '/project/1/home-settings'}
            title="Documentation Page"
            rel="noopener noreferrer"
          >
            <HomeIcon />
            <ListTitle>Home</ListTitle>
          </Item>
        </ListItem>
        <ListItem>
          <Item
            href={process.env.PUBLIC_URL + '/project/1/aboutMe-settings'}
            title="Documentation Page"
            rel="noopener noreferrer"
          >
            <BrowserIcon />
            <ListTitle>/About</ListTitle>
          </Item>
        </ListItem>
        <ListItem>
          <Item
            href={process.env.PUBLIC_URL + '/project/1/contact-settings'}
            title="Contact Page"
            rel="noopener noreferrer"
          >
            <BrowserIcon />
            <ListTitle>/Contact</ListTitle>
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

// const IconWrapper = styled.div``;

const ListTitle = styled.p`
  padding: 0;
  margin: 0;
  padding-left: 0.7rem;
`;

const ListItem = styled.li`
  padding: 0.2rem 0;
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
  padding: 0.25rem 1rem 0.25rem 0;
  font-size: 0.875rem;
  font-weight: 500;
  align-items: center;

  &::before {
    content: '';
    padding: 0.4rem;
  }

  &:hover,
  ${ListItem} {
    color: #ffff;
  }

  .icon {
    margin-right: 0.25rem;
  }
`;
