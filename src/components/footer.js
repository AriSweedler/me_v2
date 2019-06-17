import React from 'react'

import styled from 'styled-components';
import theme from '../theme'

import IconArray from './Icons/iconArray'

const Outside = styled.div`
  width: 100%;
  height: auto;
  background: ${theme.primary.dark}55;
  border: ${theme.border.width} solid ${theme.third.normal}88;
`
const Inside = styled.div`
  padding: ${theme.padding.breathing_room} ${theme.padding.breathing_room};
`

const Footer = () => (
  <Outside>
    <Inside>
      <IconArray />
    </Inside>
  </Outside>
)

export default Footer
