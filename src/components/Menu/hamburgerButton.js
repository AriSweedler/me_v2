import styled from 'styled-components';
import theme from '../../theme';
import React from 'react';

const slice = theme.HamburgerButton.width/12;

const CSS_to_open_Menu = `
position: fixed;
& > .line {
  &:nth-child(1) {
    transform: translate(${slice*1.5}px, ${slice*0.5}px) rotate(45deg);
  }
  &:nth-child(2) {
    /* Can't do visibility: hidden; because it doesn't play nice with transitions */
    opacity: 0;
  }
  &:nth-child(3) {
    transform: translate(${slice*1.5}px, ${slice*-0.5}px) rotate(-45deg);
  }
}`

const StyledHamburgerButton = styled.div`
  pointer-events: auto;
  position: absolute;
  z-index: 3;
  right: ${theme.border.width * 2}px;
  top: ${theme.border.width * 2}px;
  cursor: pointer;

  display: flex;
  flex-direction: column;

  & > .line {
    height: ${slice * 2}px;
    margin: ${slice}px;
    width: ${slice * 10}px;
    background-color: ${theme.white};
    transition: all 0.3s;

    transform-origin: 0 ${slice}px;
  }

  // Add the CSS to spin the button if it's open, or don't add it
  ${props => (props.open) && (CSS_to_open_Menu)}

  margin: ${theme.margin.hamburger_button};
`

const HamburgerButton = (props) => (
  <StyledHamburgerButton open={props.open}>
    <span className="line"></span>
    <span className="line"></span>
    <span className="line"></span>
  </StyledHamburgerButton>
)

export default HamburgerButton
