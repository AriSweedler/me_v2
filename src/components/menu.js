import styled from 'styled-components';
import theme from '../theme';
import React from 'react';

const StyledMenu = styled.div`
  background: ${theme.primary.normal};
`

const Menu = () => (
  <StyledMenu>Menu</StyledMenu>
)

export default Menu