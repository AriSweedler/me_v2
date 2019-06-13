import React from 'react'

import styled from 'styled-components';
import theme from '../../theme'


const StyledIcon = styled.div`
  background: ${theme.primary.dark};
  margin: 0 1.5rem;
  width: 3rem;
  height: 3rem;

  ${theme.debug.border} white;
`

const Icon = () => (
  <StyledIcon>
    <span>icon</span>
  </StyledIcon>
)

export default Icon
