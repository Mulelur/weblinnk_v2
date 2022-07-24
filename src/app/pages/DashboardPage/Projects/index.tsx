import * as React from 'react';
import styled from 'styled-components/macro';
import { Title } from '../components/Title';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as AddIcon } from './assets/add-icon.svg';
import { LoadingIndicator } from 'app/components/LoadingIndicator';
import { Card } from './Card';
import { Button } from './components/Button';
import { gql, useQuery } from '@apollo/client';
import Backdrop from '@mui/material/Backdrop';

const SITES = gql`
  query {
    sites {
      data {
        id
        attributes {
          status
          siteUrl
          siteName
          previewUrl
          template {
            data {
              attributes {
                pages {
                  homePage {
                    id
                  }
                }
              }
            }
          }
          category
        }
      }
    }
  }
`;

export function Projects() {
  const { loading, error, data } = useQuery(SITES);

  const navigate = useNavigate();

  if (loading)
    return (
      <>
        <Backdrop
          sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
          open={true}
        >
          <LoadingIndicator />
        </Backdrop>
      </>
    );
  if (error) return <>`Error! ${error.message}`</>;

  return (
    <>
      <Title as="h2">Projects</Title>
      <List>
        {data.sites.data.map(site => (
          <Project key={site.id} href={process.env.PUBLIC_URL + `/project`}>
            <Card site={site.attributes} />
          </Project>
        ))}
      </List>
      <Button onClick={() => navigate(process.env.PUBLIC_URL + '/create-site')}>
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

const Project = styled.a`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  color: currentColor;
  text-decoration: none;
`;
