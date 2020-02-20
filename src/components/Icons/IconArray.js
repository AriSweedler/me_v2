import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';
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

const socials = [
  {link: "http://github.com/arisweedler/", icon: <FaGithub />},
  {link: "https://www.linkedin.com/in/arisweedler/", icon: <FaLinkedin />},
  {link: "https://twitter.com/Adsweed/", icon: <FaTwitter />},
]
const IconArray = () => {

  const socialIcons = [];
  for (let s of socials) {
    socialIcons.push(
      <StyledIcon href={s.link} target="_blank">
        {s.icon}
      </StyledIcon>
    );
  }
  return (
    <StyledIconArray>
      {socialIcons}
    </StyledIconArray>
  )
}

export default IconArray