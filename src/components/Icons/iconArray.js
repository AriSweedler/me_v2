import React from 'react'

import styled from 'styled-components';
import theme from '../../theme'

import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const StyledIcon = styled.a`
  font-size: 50px;
  margin: 0 0.5em;

  color: ${theme.white};
  transition: 0.5s;
  :hover {
    color: ${theme.secondary.light};
  }
`

const StyledIconArray = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

const IconArray = () => (
  <StyledIconArray>

    <StyledIcon href="http://github.com/arisweedler/" target="_blank">
      <FaGithub />
    </StyledIcon>

    <StyledIcon href="http://linkedin.com/arisweedler" target="_blank">
      <FaLinkedin />
    </StyledIcon>

    <StyledIcon href="https://twitter.com/Adsweed" target="_blank">
      <FaTwitter />
    </StyledIcon>

  </StyledIconArray>
)

export default IconArray
