import styled from 'styled-components';
import theme from '../theme'

import React from 'react'

const Outside = styled.div`
  background: ${theme.primary.normal};
`
const Inside = styled.div`
  padding: ${theme.padding.breathing_room} ${theme.padding.breathing_room};
  border: 5px solid ${theme.third}55;
`

const Header = () => (
  <Outside>
    <Inside>
      <span style={{color: theme.white}}>ad</span>
      <span style={{color: theme.secondary.normal}}>sweed</span>
    </Inside>
  </Outside>
)

export default Header
