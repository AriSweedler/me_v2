import React from 'react'

import styled from 'styled-components';
import theme from '../../theme'

import Icon from './icon'


const StyledIconArray = styled.div`
  background: ${theme.primary.dark};
  display: flex;
  justify-content: center;
`

const IconArray = () => (
  <StyledIconArray>
    <Icon />
    <Icon />
    <Icon />
  </StyledIconArray>
)

export default IconArray
