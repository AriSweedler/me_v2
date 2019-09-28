import React from 'react';
import styled from 'styled-components';
// import theme from '../../theme';

const StyledListWrapper = styled.div`
`
const StyledList = styled.ul`
`

const InterestList = () => (
  <StyledListWrapper>
    <StyledList>
      <li>TODO This is where I'd put a link to a page about books I like</li>
      <li>TODO This is where I'd put a link to a page about movies I like</li>
      <li>TODO This is where I'd put a link to a page about tv shows I like</li>
    </StyledList>
  </StyledListWrapper>
)

export default InterestList
