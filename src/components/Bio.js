import React from 'react';
import styled from 'styled-components';
import theme from '../theme';
import InterestList from './Interests/InterestList';

const StyledBio = styled.div`
  background: ${theme.third.light}11;
  padding : 10px;
`

const Bio = () => (
  <StyledBio>
    <h1>Hi</h1>
    <h2>I'm Ari Sweedler</h2>
    <p>I'm a senior at UCLA, studying computer science. I don't really know what I want to do, but that's ok. Like everyone else, I enjoy reading and watching movies or tv shows. I like cool puzzles, too. I like intricate but understandable systems, like vim, git, bash, C, or C++. I also like intricate and less-than-understandable systems, like vim, git, bash, C, and C++.</p>
    <p>I could talk to you about vim for probably 5 hours.</p>
    <p>I like the idea of leaving a digital footprint, so the code for this website makes me happy. I understand what React, Gatsby, Styled-Components, and Node do at a high level, enough to write a website for me and my sister, but I do not understand what React, Gatsby, Styled-Components, and Node do at a low level.</p>
    <InterestList />
  </StyledBio>
)

export default Bio
