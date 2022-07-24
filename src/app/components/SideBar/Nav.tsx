import * as React from 'react';
import styled from 'styled-components/macro';
import { ReactComponent as Dashboard } from './assets/dashboard-icon.svg';
import { ReactComponent as SettingsIcon } from './assets/settings-icon.svg';
import { FormLabel } from '../FormLabel';
import { useDispatch } from 'react-redux';
import { useNavigateSlice } from 'app/pages/ProjectPage/slice';

export function Nav() {
  const dispatch = useDispatch();

  const { actions } = useNavigateSlice();
  return (
    <Wrapper>
      <FormLabel>Site Setting</FormLabel>
      <List>
        <ListItem>
          <Item
            onClick={() => dispatch(actions.setNavigate(''))}
            title="Documentation Page"
            rel="noopener noreferrer"
          >
            <Dashboard />
            <ListTitle>Dashboard</ListTitle>
          </Item>
        </ListItem>
        <ListItem>
          <Item
            onClick={() => dispatch(actions.setNavigate('settings'))}
            title="Github Page"
            rel="noopener noreferrer"
          >
            <SettingsIcon />
            <ListTitle>Settings</ListTitle>
          </Item>
        </ListItem>
      </List>

      {/* //////////// */}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: -1rem;
  padding-top: 1.8rem;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
`;

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
