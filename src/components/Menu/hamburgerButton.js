import styled from 'styled-components';
import theme from '../../theme';
import React from 'react';

const slice = theme.HamburgerButton.width/12;

const spin = `
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
  right: ${theme.border.width2};
  top: ${theme.border.width2};
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

  ${props => (props.open)?(spin):("")}

  background: ${theme.primary.normal}11;
`

const HamburgerButton = (props) => (
  <StyledHamburgerButton open={props.open}>
    <span className="line"></span>
    <span className="line"></span>
    <span className="line"></span>
  </StyledHamburgerButton>
)

export default HamburgerButton