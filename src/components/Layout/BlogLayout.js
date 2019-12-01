import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';
import Layout from './Layout';

//TODO do this stuff: https://css-tricks.com/overriding-the-default-text-selection-color-with-css/
const StyledChildren = styled.div`
  background: ${theme.white};
  max-width: 72ch;
  padding: ${theme.padding.breathing_room};
  border: ${theme.border.width}px solid ${theme.primary.light}99;

  a {
    text-decoration-color: ${theme.third.normal};
    :hover {
      text-decoration-color: ${theme.secondary.normal};
    }
  }
`

const InnerBlogStyle = styled.div`
  border: ${theme.border.width}px solid ${theme.primary.dark}99;

  display: flex;
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
