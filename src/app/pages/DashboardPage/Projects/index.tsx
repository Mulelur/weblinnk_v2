import * as React from 'react';
import styled from 'styled-components/macro';
import { Title } from '../components/Title';
import { ReactComponent as AddIcon } from './assets/add-icon.svg';
import { Card } from './Card';
import { Button } from './components/Button';
import { gql, useQuery } from '@apollo/client';
import { useHistory } from 'react-router-dom';

const SITES = gql`
  query {
    sites {
      data {
        id
        attributes {
          siteId
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
  const history = useHistory();

  if (loading) return <>'Loading...'</>;
  if (error) return <>`Error! ${error.message}`</>;

  console.log(data);

  return (
    <>
      <Title as="h2">Projects</Title>
      <List>
        {data.sites.data.map(site => (
          <Project href={process.env.PUBLIC_URL + `/project/${site.id}`}>
            <Card site={site.attributes} />
          </Project>
        ))}
      </List>
      <Button
        onClick={() => history.push(process.env.PUBLIC_URL + '/create-site')}
      >
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
