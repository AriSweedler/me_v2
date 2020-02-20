import React from 'react'

import styled from 'styled-components';
import theme from '../../theme'

import IconArray from '../Icons/IconArray'

const Outside = styled.div`
  width: 100%;
  height: auto;
  background: ${theme.primary.dark}55;
  border: ${theme.border.width}px solid ${theme.third.normal}88;
`
const Inside = styled.div`
  padding: ${theme.padding.breathing_room} ${theme.padding.breathing_room} 0.5rem;
`

const StyledDate = styled.p`
  margin: 0;
  color: ${theme.third.double_light}
`

const Footer = () => (
  <Outside>
    <Inside>
      <IconArray />
      <StyledDate>Ari Sweedler, 1998-{new Date().getFullYear()}</StyledDate>
    </Inside>
  </Outside>
)

export default Footer
