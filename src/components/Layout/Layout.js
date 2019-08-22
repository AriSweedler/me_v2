import React, { useState } from "react";
import styled from 'styled-components';
import theme from '../../theme';
import Header from './Header';
import Footer from './Footer';
import './Layout.css';

const StyledLayout = styled.div`
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

const Layout = ({ children }) => {
  let [menuOpen, setMenu] = useState(false);
  return (
    <StyledLayout>
      <Header menuOpen={menuOpen} setMenu={setMenu} />
      <StyledMiddle menuOpen={menuOpen}>
        {children}
      </StyledMiddle>
      <Footer />
    </StyledLayout>
  )
}

export default Layout
