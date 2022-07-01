import * as React from 'react';
import styled from 'styled-components/macro';
import { Title } from '../components/Title';
// import { SubTitle } from '../components/SubTitle';
// import { P } from '../components/P';
// import { A } from 'app/components/A';
// import { GithubRepoForm } from './GithubRepoForm';
// import { LanguageSwitch } from './LanguageSwitch';
import { ReactComponent as AddIcon } from './assets/add-icon.svg';

// import { useTranslation } from 'react-i18next';
// import { Link } from 'app/components/Link';
// import { messages } from '../messages';
import { Card } from './Card';
import { Button } from './components/Button';

export function Projects() {
  return (
    <>
      <Title as="h2">Projects</Title>
      <List>
        <Project>
          <Card imageSrc="https://images.unsplash.com/photo-1651724682401-a10daf761c96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80" />
        </Project>
        <Project>
          <Card imageSrc="https://images.unsplash.com/photo-1651648814980-55936f67f9f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" />
        </Project>
        <Project>
          <Card imageSrc="https://images.unsplash.com/photo-1651860207580-ddc55836bd8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" />
        </Project>
        <Project>
          <Card imageSrc="https://images.unsplash.com/photo-1636837955417-2d8a4e49368f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
        </Project>
      </List>
      <Button>
        <AddIcon />
      </Button>
    </>
  );
}

const List = styled.div`
  width: 100%;
  margin: 2.15rem 0 6rem 0;
  display: inline-grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(21rem, 1fr));
  padding-bottom: 4rem;
`;

const Project = styled.div`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;
