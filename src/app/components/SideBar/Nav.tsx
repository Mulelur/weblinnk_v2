import * as React from 'react';
import styled from 'styled-components/macro';
import { ReactComponent as DocumentationIcon } from './assets/documentation-icon.svg';
import { ReactComponent as GithubIcon } from './assets/github-icon.svg';

export function Nav() {
  return (
    <Wrapper>
      <List>
        <ListItem>
          <Item
            href="https://cansahin.gitbook.io/react-boilerplate-cra-template/"
            target="_blank"
            title="Documentation Page"
            rel="noopener noreferrer"
          >
            <DocumentationIcon />
            Documentation
          </Item>
        </ListItem>
        <ListItem>
          <Item
            href="https://github.com/react-boilerplate/react-boilerplate-cra-template"
            target="_blank"
            title="Github Page"
            rel="noopener noreferrer"
          >
            <GithubIcon />
            Github
          </Item>
        </ListItem>
      </List>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  margin-right: -1rem;
`;

const List = styled.ul``;

const ListItem = styled.li`
  padding: 0.5rem 0;
  margin: 0.2rem 1rem 0.2rem 0;
  &:hover {
    opacity: 0.8;
    background-color: rgba(235, 121, 17, 0.2);
    border-radius: 0.25rem;
  }
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
