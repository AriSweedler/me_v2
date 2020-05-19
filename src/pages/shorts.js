import React from 'react';
import styled from 'styled-components';
import theme from '../theme'
import SEO from '../components/seo';
import TextLayout from '../components/Layout/TextLayout';

import StyledLink from '../components/StyledLink';

const StyledUnordredList = styled.div`
  padding: ${theme.padding.breathing_room} ${theme.padding.breathing_room};
`

const posts = [
  {title: 'White Tiles', link: '/michael'},
  {title: 'The Brian Story', link: '/brian'},
  {title: 'UCLA', link: '/ucla'},
];

const ShortsPage = () => {
  const shortsPostArray = [];
  for (let p of posts) {
    shortsPostArray.push(
      <li>
        <StyledLink to={"/shorts/" + p.link}>{p.title}</StyledLink>
      </li>
    );
  }
  return (
    <TextLayout overrideWidth="97vw">
      <SEO title="shorts" />
      Here I'll have links to all shorts.
      <StyledUnordredList>
        {shortsPostArray}
      </StyledUnordredList>
    </TextLayout>
  )
}

export default ShortsPage
