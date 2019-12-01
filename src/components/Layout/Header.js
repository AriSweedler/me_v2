import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';
import Menu from '../Menu/MenuOverlay';
import Logo from '../Logo';
import HamburgerButton from '../Menu/HamburgerButton';

const StyledHeaderWrapper = styled.div`
  background: ${theme.primary.normal};
`

const StyledHeader = styled.div`
  border: ${theme.border.width}px solid ${theme.third.normal}55;
  display: flex;
  justify-content: space-between;
  >:first-child {
    z-index: ${props => props.open ? "0" : "1"};
  }
`

//TODO add some logic to tell if we're scrolling down or up. When we scroll up, I wanna have this show up and pop up even if we're not at the top of the page

const Header = (props) => (
  <StyledHeaderWrapper>
    <StyledHeader open={props.menuOpen}>
      <Logo />
      <HamburgerButton open={props.menuOpen} setOpen={props.setMenu}/>
    </StyledHeader>
    <Menu open={props.menuOpen}/>
  </StyledHeaderWrapper>
)

export default Header
