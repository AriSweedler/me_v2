import styled from 'styled-components';
import theme from '../../theme';
import { Link } from "gatsby"
import React from 'react';

const StyledNavMenuDiv = styled.div`
  height: 100%;

  visibility: ${props => (props.open)?"hidden":"visible"};
`

const StyledNavList = styled.nav`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  list-style: none;
`

const StyledNavItem = styled(Link)`
  color: ${theme.third.double_light};
  font-size: 1.5rem;
  margin: 1rem;
  text-align: center;
  text-decoration: none;

  transform: translate(${props => (props.open)?"0":"900%"}, 0);

  pointer-events: auto;
  transition: all 0.5s ease;
  transition-delay: ${props => props.delay}s;
  &:hover {
    color: ${theme.secondary.normal}
  }
`

// How can I read what files are possible to link to? Is there a better place to store or collect this data?
const pages = [
  {title: 'home', link: '/'},
  {title: 'about', link: '/about'},
];

const NavMenu = (props) => {
  const pagesArray = [];
  let i = 0;
  for (let p of pages) {
    pagesArray.push(
      <StyledNavItem open={props.open} to={p.link} delay={0.1*(2+i)} key={i++}>
        {p.title}
      </StyledNavItem>
    );
  }

  return (
    <StyledNavMenuDiv>
      <StyledNavList>{pagesArray}</StyledNavList>
    </StyledNavMenuDiv>
  )
}

export default NavMenu
