import React from 'react';
import styled from 'styled-components';
import theme from '../theme';

const StyledBlockquote = styled.div`
  border-bottom: 1px solid ${theme.third.dark};
  margin-bottom: 0.5em;

  color: ${theme.third.double_light};
  font-size: 1.5em;
  font-style: italic;
  line-height: 1.4;
  text-shadow: 0 1px white;

  text-align: ${props => props.right ? "right": "left"};
  margin-right: ${props => props.right ? "0": "3em"};
  margin-left: ${props => props.right ? "3em": "0"};

  &::after {
    content: "”";
  }
  &::before {
    content: "“";
  }
`

const Quote = ({right, children}) => {
  return (
  <StyledBlockquote right={right}>
    {children}
  </StyledBlockquote>
  );
}

export default Quote;