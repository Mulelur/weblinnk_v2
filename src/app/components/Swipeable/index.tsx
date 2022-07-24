import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import styled from 'styled-components';
import { Logo } from '../SideBar/Logo';
import { Nav } from '../SideBar/Nav';
import { Upgrade } from '../Upgrade';
import { useSwipeableSlice } from '../NavBar/slice';
import { selectOpen } from '../NavBar/slice/selectors';

type Anchor = 'left';

export default function Swipeable() {
  const open = useSelector(selectOpen);

  const dispatch = useDispatch();

  const { actions } = useSwipeableSlice();

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      dispatch(actions.setOpen(!open));
    };

  const list = (anchor: Anchor) => (
    <Container
      role="presentation"
      onClick={toggleDrawer(anchor, open)}
      onKeyDown={toggleDrawer(anchor, open)}
    >
      <Content>
        <Logo />
        <Divider />
        <Nav />
        <Upgrade />
      </Content>
    </Container>
  );

  return (
    <div>
      <React.Fragment>
        <SwipeableDrawer
          anchor="left"
          open={open}
          onClose={toggleDrawer('left', open)}
          onOpen={toggleDrawer('left', open)}
        >
          {list('left')}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 252px;
  position: fixed;
  border-right: 1px solid ${p => p.theme.borderLight};
  background-color: ${p => p.theme.background};
  border-right: 1px solid ${p => p.theme.borderLight};

  @supports (backdrop-filter: blur(10px)) {
    backdrop-filter: blur(10px);
    background-color: ${p =>
      p.theme.background.replace(
        /rgba?(\(\s*\d+\s*,\s*\d+\s*,\s*\d+)(?:\s*,.+?)?\)/,
        'rgba$1,0.75)',
      )};
  }

  left: 0px;
  top: 0px;
  bottom: 0px;
  box-sizing: border-box;
  background-color: rgba(86, 105, 147, 0.024);

  padding: 36px 28px 32px;
  z-index: 2;
`;

const Content = styled.div``;

const Divider = styled.div`
  height: 0.1rem;
  width: 100%;
  background-color: ${p => p.theme.borderLight};
  margin: 1.3rem 0 0 0;
`;
