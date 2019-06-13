import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Hero from "../components/hero"

import styled from 'styled-components';
import theme from '../theme'
import backgroundImage from '../images/yin_yang.jpg';

const StyledIndexPage = styled.div`
  padding: ${theme.padding.breathing_room} 0;
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: rgb(127, 127, 127);
  background-repeat: no-repeat;
  background-image: url(${backgroundImage});
  background-position: center;
  // background-attachment: fixed;
  background-size: auto 100%;
`


const CallToAction = styled.div`
  background: ${theme.primary.dark};

  padding: 0.4rem 1rem;
  border-radius: 1em;

  //The I'm using an alpha value of 50 here
  border: solid 2px ${theme.secondary.normal}50;
  color: ${theme.white}
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <StyledIndexPage>
      <Hero />
      <CallToAction>Keep it clean, coco bean.</CallToAction>
    </StyledIndexPage>
  </Layout>
)

export default IndexPage
