import React from 'react';
import styled from 'styled-components';
import theme from '../theme'
import SEO from '../components/seo';
import Layout from '../components/Layout/Layout';

import StyledLink from '../components/StyledLink';

const BlogWrapper = styled.div`
  padding: ${theme.padding.breathing_room} ${theme.padding.breathing_room};
`

const BlogPage = () => (
  <Layout>
    <SEO title="Blog" />
    <BlogWrapper>
      <p>Here I'll have links to all posts.</p>
      <ul>
        <li>Here's a link to <StyledLink to="/maya">Maya's recs</StyledLink>! Nice.</li>
        <li><StyledLink to="/blog/post8/">Post 8</StyledLink></li>
        <li><StyledLink to="/blog/post9/">Post 9</StyledLink></li>
      </ul>
    </BlogWrapper>
  </Layout>
)

export default BlogPage
