/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import styled from 'styled-components';
import theme from '../theme';

import Layout from "./layout"

const StyledChildren = styled.div`
  background: ${theme.white};
  width: 80ch;
  padding: ${theme.padding.breathing_room};
  border: ${theme.border.width}px solid ${theme.primary.light}99;
`

const InnerBlogStyle = styled.div`
  border: ${theme.border.width}px solid ${theme.primary.dark}99;

  display: fle;
  justify-content: center;
`

const BlogLayout = ({ children }) => (
  <Layout>
    <InnerBlogStyle>
      <StyledChildren>{children}</StyledChildren>
    </InnerBlogStyle>
  </Layout>
)

export default BlogLayout
