import React from "react"
// import styled from 'styled-components';
// import theme from '../theme'
import SEO from '../components/seo';
import BlogLayout from '../components/Layout/BlogLayout';
import Bio from '../components/Bio';

const AboutPage = () => (
  <BlogLayout>
    <SEO title="About" />
    <Bio />
  </BlogLayout>
)

export default AboutPage
