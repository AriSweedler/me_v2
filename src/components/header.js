import styled from 'styled-components';
import theme from '../theme'
import { Link } from "gatsby"
import React from 'react'

const Outside = styled.div`
  background: ${theme.primary.normal};
`
const Inside = styled.div`
  padding: ${theme.padding.breathing_room} ${theme.padding.breathing_room};
  border: ${theme.border.width} solid ${theme.third}55;
`

const StyledLink = styled(Link)`
  text-decoration: none;
`

const Header = () => (
  <Outside>
    <Inside>
      <StyledLink to="/">
        <span style={{color: theme.white}}>ad</span>
        <span style={{color: theme.secondary.normal}}>sweed</span>
      </StyledLink>
    </Inside>
  </Outside>
)

export default Header
