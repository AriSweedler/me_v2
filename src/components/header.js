import styled from 'styled-components';
import theme from '../theme'
import { Link } from "gatsby"
import React from 'react'
import Menu from "./Menu/menu"

const Outside = styled.div`
  background: ${theme.primary.normal};
  position: sticky;
  top: 0px;
`
const Inside = styled.div`
  padding: ${theme.padding.breathing_room} ${theme.padding.breathing_room};
  border: ${theme.border.width}px solid ${theme.third.normal}55;
`

const StyledLink = styled(Link)`
  text-decoration: none;
`

//TODO add some logic to tell if we're scrolling fown or up - show or hide accordingly

const Header = (props) => (
  <Outside>
    <Inside>
      <StyledLink to="/">
        <span style={{color: theme.white}}>ad</span>
        <span style={{color: theme.secondary.normal}}>sweed</span>
      </StyledLink>
      <Menu setMenu={props.setMenu}/>
    </Inside>
  </Outside>
)

export default Header
