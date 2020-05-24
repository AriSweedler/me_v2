import React from 'react';
import styled from 'styled-components';
import PageLayout from '../components/Layout/PageLayout';

const StyledGui = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyledAnchor = styled.a`
  text-decoration: none;
  color: black;
  padding: 3em 20em;

  :hover {
    text-decoration: underline;
    color: blue;
    background: white;
    cursor: crosshair;
  }
`

const StyledP = styled.p`
  paddingL 3em;
  text-decoration: underline;
  cursor: crosshair;
`

const GuiPage = () => (
  <PageLayout>
    <StyledGui>
      <StyledAnchor href="https://aarochu.github.io/freecandy/">
        <h1>Gui</h1>
      </StyledAnchor>
      <StyledP>~~gui~~</StyledP>
    </StyledGui>
  </PageLayout>
)

export default GuiPage
