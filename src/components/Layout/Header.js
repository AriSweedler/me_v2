import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';
import Menu from '../Menu/MenuOverlay';
import Logo from '../Logo';
import HamburgerButton from '../Menu/HamburgerButton';

const Outside = styled.div`
  background: ${theme.primary.normal};
  position: sticky;
  top: 0px;
  z-index: 1;
`

const Inside = styled.div`
  border: ${theme.border.width}px solid ${theme.third.normal}55;
  display: flex;
  justify-content: space-between;
  >:first-child {
    z-index: ${props => props.open ? "0" : "1"};
  }
`

//TODO add some logic to tell if we're scrolling fown or up - show or hide accordingly

const Header = (props) => (
  <Outside>
    <Inside open={props.menuOpen}>
      <Logo />
      <HamburgerButton open={props.menuOpen} setOpen={props.setMenu}/>
    </Inside>
    <Menu open={props.menuOpen}/>
  </Outside>
)

export default Header
