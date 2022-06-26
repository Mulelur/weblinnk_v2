import * as React from 'react';
import { H4 } from 'app/components/common/typography/H4';
import styled from 'styled-components/macro';
import { Card } from '../components/Card';
import { Column } from 'app/components/common/layout/Column';
import { Row } from 'app/components/common/layout/Row';
import { Form, FormGroup } from 'app/pages/Auth/SignIn/SignInForm';
import { Label } from 'app/components/common/feedback/Label';
import { Input } from 'app/components/common/feedback/Input';
import { SingleUploader } from 'app/components/Uploder/SingleUploader';
import { ReactComponent as HomeIcon } from './assets/home-icon.svg';
import { Gap } from 'app/components/common/layout/Gap';

type Props = {
  title: string;
};

export function AboutMeCard(props: Props) {
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
                  <Label>Text 1</Label>
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

const Container = styled.div``;

const Content = styled.div`
  width: 100%;
`;
