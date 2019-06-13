import styled from 'styled-components';
import theme from '../../theme';
import React from 'react';

import HeroMenu from './heroMenu'
import NavMenu from './navMenu'

const StyledMenuOverlay = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background: ${theme.primary.normal};
  opacity: ${props => (props.open)?"1":"0"};

  transition: all 0.7s ease;

  display: flex;

  > * {
    width: 50%;
    opacity: 0.9;
    transition: all 0.7s ease;

    background: red;
    transform: translate(0, -100%);

    ${props => (props.open) ? `
      transform: translate(0, 0) !important;
    `:""}
  }
}
`

const rightStyle = {
  transform: 'translate(0, 100%)',
  background: 'orange'
}

const MenuOverlay = (props) => (
  <StyledMenuOverlay open={props.open}>
    <div open={props.open}><HeroMenu/></div>
    <div style={rightStyle} open={props.open}><NavMenu/></div>
  </StyledMenuOverlay>
)

export default MenuOverlay
