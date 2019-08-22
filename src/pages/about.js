import React from "react"
// import styled from 'styled-components';
// import theme from '../theme'
import SEO from '../components/seo';
import Layout from '../components/Layout/Layout';
import Bio from '../components/Bio';

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <Bio />
  </Layout>
)

export default AboutPage
