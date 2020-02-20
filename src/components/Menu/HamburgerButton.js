import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';

const slice = theme.hamburger_button.width/12;

const CSS_to_open_Menu = `
// position: fixed;
& > .line {
  &:nth-child(1) {
    transform: translate(${slice*1.5}px, ${slice*0.5}px) rotate(45deg);
  }
  &:nth-child(2) {
    opacity: 0;
  }
  &:nth-child(3) {
    transform: translate(${slice*1.5}px, ${slice*-0.5}px) rotate(-45deg);
  }
}`

const StyledHamburgerButton = styled.div`
  z-index: 1;
  cursor: pointer;
  align-self: start;
  margin: ${theme.hamburger_button.margin};

  // Deal with the 3 lines
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

  // Add or don't add the CSS to spin the button based on if it's open
  ${props => (props.open) && (CSS_to_open_Menu)}

  margin: ${theme.hamburger_button.margin};
`

const HamburgerButton = (props) => {
  const clickHandler = () => {
    props.setOpen(!props.open)
  }
  return (
    <StyledHamburgerButton open={props.open} onClick={clickHandler}>
      <span className="line"></span>
      <span className="line"></span>
      <span className="line"></span>
    </StyledHamburgerButton>
  );
}


export default HamburgerButton
