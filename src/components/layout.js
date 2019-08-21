import React, { useState } from "react";
import styled from 'styled-components';
import theme from '../theme';

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  background: ${theme.primary.light};
  padding: ${theme.padding.layout};

  border: ${theme.border.width}px solid ${theme.third.normal};
`

const PageFiller = styled.div`
  flex-grow: 1;
`

const Layout = ({ children }) => {
  let [menuOpen, setMenu] = useState(false);
  return (
    <StyledLayout>
      <Header setMenu={setMenu} />
      {menuOpen ? <PageFiller /> : children}
      <Footer />
    </StyledLayout>
  )
}

export default Layout
