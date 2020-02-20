import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import theme from '../theme';

const StyledLink = styled(Link)`
  padding: ${theme.padding.breathing_room} ${theme.padding.breathing_room};
  text-decoration: none;
`
const Logo = () => (
  <StyledLink to="/">
    <span style={{color: theme.white}}>ad</span>
    <span style={{color: theme.secondary.normal}}>sweed</span>
  </StyledLink>
);

const StyledLogoWrapper = styled.div`
  font-size: 5rem;

  @media (max-width: 450px) {
    font-size: 3rem;
  }

  @media (max-width: 270px) {
    font-size: 2rem;
  }

  height: calc(${theme.padding.breathing_room} * 2)
  background: ${theme.primary.normal}88;
  background-image: linear-gradient(to right, ${theme.primary.dark}05, ${theme.primary.light} 20%, ${theme.primary.light}60 90%, ${theme.primary.dark}00);
  padding: 2rem;
  border-radius: 1rem 5rem 2rem;

  margin: ${theme.padding.breathing_room} 0
`

const StyledLogo = () => (
  <StyledLogoWrapper>
    <Logo />
  </StyledLogoWrapper>
);

export default Logo;
export { StyledLogo };