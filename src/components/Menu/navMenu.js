import styled from 'styled-components';
import theme from '../../theme';
import { Link } from "gatsby"
import React from 'react';

const StyledNavMenuDiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  visibility: ${props => (props.open)?"hidden":"visible"};
`

const StyledNavList = styled.nav`
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  list-style: none;
`

const StyledNavItem = styled(Link)`
  // Need to turn pointer-events back on
  pointer-events: auto;

  color: ${theme.third.double_light};
  font-size: 1.5rem;
  text-decoration: none;

  padding: ${theme.padding.breathing_room};
  background-image: linear-gradient(to right, ${theme.primary.light}, ${theme.primary.dark}80, ${theme.primary.light});
  border-radius: ${theme.padding.breathing_room};

  // This is the cool part
  transform: translate(${props => (props.open)?"0":"900%"}, 0);
  transition: transform 0.5s ease ${props => props.delay}s, color 0.8s ease;
  &:hover {
    transition: color 0.3s ease;
    color: ${theme.secondary.normal}
  }
`

// How can I read what files are possible to link to? Is there a better place
// to store or collect this data?
const pages = [
  {title: 'home', link: '/'},
  {title: 'about (WIP)', link: '/about'},
  {title: 'Hyuntae read this', link: '/ted'},
  {title: 'post8', link: '/blog/post8'},
  {title: 'nowhere', link: 'Literally nowhere'},
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
