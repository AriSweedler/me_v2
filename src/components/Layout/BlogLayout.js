import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';
import Layout from './Layout';

const StyledChildren = styled.div`
  background: ${theme.white};
  max-width: 80ch;
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

export default BlogLayout;