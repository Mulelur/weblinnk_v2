import * as React from 'react';
import { H4 } from 'app/components/common/typography/H4';
import styled from 'styled-components/macro';
import { Column } from 'app/components/common/layout/Column';
import { Row } from 'app/components/common/layout/Row';
import { Label } from 'app/components/common/feedback/Label';
import { Input } from 'app/components/common/feedback/Input';
import { ReactComponent as HomeIcon } from './assets/home-icon.svg';
import { Gap } from 'app/components/common/layout/Gap';
import { Card } from 'app/pages/ProjectPage/Dashboard/components/Card';
import { SingleUploader } from 'app/components/Uploader/SingleUploader';
import { Form, FormGroup } from 'app/pages/Auth/SignInPage/SignInForm';

type Props = {
  title: string;
};

export function HomeCard(props: Props) {
  const { title } = props;
  return (
    <Container>
      <Card>
        <Content>
          <Header>
            <IconWrapper>
              <HomeIcon />
            </IconWrapper>
            <H4>{title}</H4>
          </Header>
          <Row>
            <Column>
              <Form>
                <FormGroup>
                  <Label>Title 1</Label>
                  <Input type="text" placeholder="Enter something here!" />
                </FormGroup>
                <FormGroup>
                  <Label>Title 2</Label>
                  <Input type="text" placeholder="Enter something here!" />
                </FormGroup>
                <FormGroup>
                  <Label>Title 3</Label>
                  <Input type="text" placeholder="Enter something here!" />
                </FormGroup>
                <FormGroup>
                  <Label>Title 4</Label>
                  <Input type="text" placeholder="Enter something here!" />
                </FormGroup>
                <Row>
                  <FormGroup>
                    <Label>Link 1</Label>
                    <Input type="text" placeholder="Enter something here!" />
                  </FormGroup>
                  <Gap />
                  <FormGroup>
                    <Label>Link 2</Label>
                    <Input type="text" placeholder="Enter something here!" />
                  </FormGroup>
                </Row>
              </Form>
            </Column>
            <Column>
              <SingleUploader type="image" />
            </Column>
          </Row>
        </Content>
      </Card>
    </Container>
  );
}

const Header = styled.div`
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.div`
  height: 3.2rem;
  width: 3.2rem;
  color: ${p => p.theme.primary};
  background-color: ${p => p.theme.background};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.6rem;

  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1),
    0px 1px 2px 0px rgba(0, 0, 0, 0.06);
`;

const Container = styled.div`
  width: 884px;
  margin: 1rem auto;
  padding: 0 1.5rem;
  box-sizing: content-box;
`;

const Content = styled.div`
  width: 100%;
`;
