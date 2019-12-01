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
  {title: 'Post 8', link: '/post8'},
  {title: 'Post 9', link: '/post9'},
];

const BlogPage = () => {
  const blogPostArray = [];
  for (let p of posts) {
    blogPostArray.push(
      <li>
        <StyledLink to={"/blog/" + p.link}>{p.title}</StyledLink>
      </li>
    );
  }
  return (
    <TextLayout overrideWidth="97vw">
      <SEO title="Blog" />
      Here I'll have links to all posts.
      <StyledUnordredList>
        {blogPostArray}
      </StyledUnordredList>
    </TextLayout>
  )
}

export default BlogPage
