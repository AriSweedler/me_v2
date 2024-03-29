import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';
import HeroMenu from './HeroMenu'
import NavMenu from './NavMenu'

const StyledMenuOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${theme.primary.dark};
  opacity: ${props => (props.open)?"1":"0"};
  ${props => (props.open)?"":"z-index: -1"};
  transition: transform 0.7s ease, background 2s ease;

  display: flex;

  > * {
    width: 50%;
    opacity: 0.9;
    transition: transform 0.7s ease, background 2s ease;

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
