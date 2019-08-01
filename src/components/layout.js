/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import { StaticQuery, graphql } from "gatsby";
import styled from 'styled-components';
import theme from '../theme';

import Header from "./header"
import Footer from "./footer"
import Menu from "./Menu/menu"
import "./layout.css"

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;

  background: ${theme.primary.light};
  padding: ${theme.padding.layout};

  border: ${theme.border.width} solid ${theme.third.normal};
`

const StyledChildren = styled.div`
  padding: 5ch;
  max-width: 80ch;

  background: ${theme.white};
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <StyledLayout>
        <Header />
        <Menu />
        <StyledChildren>{children}</StyledChildren>
        <Footer />
      </StyledLayout>
    )}
  />
)

export default Layout
