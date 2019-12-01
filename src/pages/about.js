import React from "react"
import SEO from '../components/seo';
import TextLayout from '../components/Layout/TextLayout';
import Bio from '../components/Bio';

const AboutPage = () => (
  <TextLayout>
    <SEO title="About" />
    <Bio />
  </TextLayout>
)

export default AboutPage
