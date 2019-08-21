import styled from 'styled-components';
import theme from '../../theme';
import React from 'react';

import HeroMenu from './heroMenu'
import NavMenu from './navMenu'

const StyledMenuOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${theme.primary.dark};
  opacity: ${props => (props.open)?"1":"0"};

  transition: all 0.7s ease;

  display: flex;

  > * {
    width: 50%;
    opacity: 0.9;
    transition: all 0.7s ease;
    transform: translate(0, -100%);

    ${props => (props.open) ? `
      transform: translate(0, 0) !important;
    `:""}
  }
}
`

const rightStyle = {
  transform: 'translate(0, 100%)',
  background: theme.primary.light
}

const MenuOverlay = (props) => (
  <StyledMenuOverlay open={props.open}>
    <div>
      <HeroMenu/>
    </div>
    <div style={rightStyle}>
      <NavMenu open={props.open}/>
    </div>
  </StyledMenuOverlay>
)

export default MenuOverlay
