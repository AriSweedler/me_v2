import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Logo from "../components/logo"
import { graphql } from 'gatsby'

import styled from 'styled-components';
import theme from '../theme'
import BackgroundImage from 'gatsby-background-image'

const StyledIndexPage = styled(BackgroundImage)`
  //The main component of each page must have flex-grow: 1
  flex-grow: 1;

  padding: ${theme.padding.breathing_room} 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: contain;
  background-color: rgb(127, 127, 127);
`

const CallToAction = styled.div`
  background: ${theme.primary.dark};

  padding: 0.4rem 1rem;
  border-radius: 1em;

  //The I'm using an alpha value of 50 here
  border: solid 2px ${theme.secondary.normal}50;
  color: ${theme.white}
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <StyledIndexPage fluid={data.file.childImageSharp.fluid} backgroundColor={'#000000'}>
      <Logo />
      <CallToAction>Keep it clean, coco bean.</CallToAction>
    </StyledIndexPage>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    file(relativePath: { eq: "yin_yang.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxHeight: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`