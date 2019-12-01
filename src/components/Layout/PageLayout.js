import React, { useState } from "react";
import styled from 'styled-components';
import theme from '../../theme';
import Header from './Header';
import Footer from './Footer';
import './PageLayout.css';

const StyledPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  background: ${theme.primary.light};
  padding: ${theme.padding.layout};

  border: ${theme.border.width}px solid ${theme.third.normal};
`

const StyledMiddle = styled.div`
  flex-grow: 1;
  transition: opacity 0.5s ease-out;
  opacity: ${props => props.menuOpen ? "0" : "1"};
  z-index: ${props => props.menuOpen ? "-1" : "0"};

  display: flex;
  flex-direction: column;
  > * {
    flex-grow: 1;
  }
`

// This component adds a header (including the menu) and a footer to the page, exposing a big central "StyledMiddle" element.
// I normally style the content within the "StyledMiddle" with an additional layout, maybe a TextLayout or a TODO (What other layouts will I wanna use)
const PageLayout = ({ children }) => {
  let [menuOpen, setMenu] = useState(false);
  return (
    <StyledPageLayout>
      <Header menuOpen={menuOpen} setMenu={setMenu} />
      <StyledMiddle menuOpen={menuOpen}>
        {children}
      </StyledMiddle>
      <Footer />
    </StyledPageLayout>
  )
}

export default PageLayout