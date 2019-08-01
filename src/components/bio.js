import React from "react"

import styled from 'styled-components';
// import theme from '../theme'

const StyledBio = styled.div`
  border: red 2px solid;
`
// TODO create a  'reading' style, s.t. the width isn't too much and the colors are nice and readable and there're automatic hyperlinks to a collapsable table of contents

// TODO make a part of the site dedicated to books
// TODO make a part of the site dedicated to movies
// TODO make a part of the site dedicated to TV shows
const Bio = () => (
  <StyledBio>
    <h1>Hi</h1>
    <h2>I'm Ari Sweedler</h2>
    <p>I'm a senior at UCLA, studying computer science. I don't really know what I want to do, but that's ok. Like everyone else, I enjoy reading and watching movies or tv shows. I like cool puzzles, too. I like intricate but understandable systems, like vim, git, bash, C, or C++. I also like intricate and less-than-understandable systems, like vim, git, bash, C, and C++.</p>
    <p>I could talk to you about vim for probably 5 hours.</p>
    <p>I like the idea of leaving a digital footprint, so the code for this website makes me happy. I understand what React, Gatsby, Styled-Components, and Node do at a high level, enough to write a website for me and my sister, but I do not understand what React, Gatsby, Styled-Components, and Node do at a low level.</p>
    <p>If I had to pick a number, based on how many questions it would take an inquisitive child to get me to say "I don't know" in response to one of his queries, I would say I know React at 5, Gatsby at 2, Styled-Components at 10, and Node at 3. I think the child would get bored asking me about vim, git or bash long before I said "I don't know". I think I know C and C++ decently well, but C and C++ are quite powerful, so the variance in how many questions it would take me to say "I don't know" would be quite high. This is not a good metric, but I enjoy thinking about it.</p>
  </StyledBio>
)

export default Bio
