import React from "react"

import styled from 'styled-components';
import theme from '../theme'

const StyledHero = styled.div`
  font-size: 5rem;

  height: calc(${theme.padding.breathing_room} * 2)
  background: ${theme.primary.normal}88

  background-image: linear-gradient(to right, ${theme.primary.dark}05, ${theme.primary.light} 20%, ${theme.primary.light}60 90%, ${theme.primary.dark}00);
  padding: 2rem;
  border-radius: 1rem 5rem 2rem;

  margin: ${theme.padding.breathing_room} 0
`

const Hero = () => (
  <StyledHero>
    <span style={{color: theme.white}}>ad</span>
    <span style={{color: theme.secondary.normal}}>sweed</span>
  </StyledHero>
)

export default Hero
