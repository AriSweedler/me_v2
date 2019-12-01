import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';
import PageLayout from './PageLayout';

const StyledChildren = styled.div`
  background: ${theme.white};
  ${props => (props.overrideWidth) ? `width: ${props.overrideWidth}` : `max-width: 72ch` };

  padding: ${theme.padding.breathing_room};
  border: ${theme.border.width}px solid ${theme.primary.light}99;

  p,li,h2,h3,h4,h5,h6 {
    ::selection {
      background-color: ${theme.third.light}80;
      color: ${theme.secondary.dark};
    }
  }

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

const TextLayout = ({ overrideWidth, children }) => (
  <PageLayout>
    <InnerBlogStyle>
      <StyledChildren overrideWidth={overrideWidth}>{children}</StyledChildren>
    </InnerBlogStyle>
  </PageLayout>
)

export default TextLayout;
