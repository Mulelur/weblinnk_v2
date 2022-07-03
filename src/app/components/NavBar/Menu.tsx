import { useSwipeableSlice } from 'app/pages/ProjectPage/slice';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import { ReactComponent as MenuIcon } from './assets/menu-icon.svg';

export default function Menu() {
  const dispatch = useDispatch();

  const { actions } = useSwipeableSlice();

  return (
    <Wrapper>
      <Container>
        <Content
          onClick={() => {
            dispatch(actions.setOpen(true));
          }}
        >
          <MenuIcon />
        </Content>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: none;

  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

const Container = styled.div``;

const Content = styled.div`
  color: rgba(215, 113, 88, 1);
  padding-right: 0.8rem;
`;
