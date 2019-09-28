import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import theme from '../theme'
import SEO from '../components/seo';
import Layout from '../components/Layout/Layout';

const StyledLink = styled(Link)`
  // padding: ${theme.padding.breathing_room} ${theme.padding.breathing_room};
  // text-decoration: none;
`

const BlogWrapper = styled.div`
  padding: ${theme.padding.breathing_room} ${theme.padding.breathing_room};
  border: red solid 5px;
  :hover {
    border: green solid 10px;
  }
`

const BlogPage = () => (
  <Layout>
    <SEO title="Blog" />
    <BlogWrapper>
      <p>Here I'll have links to all posts.</p>
      <StyledLink to="/">
        <span>TODO why can't I click this?</span>
      </StyledLink>
      <p>Something about CSS's pointer-events, I think. debug me later lol</p>
    </BlogWrapper>
  </Layout>
)

export default BlogPage
