import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';
import { graphql, StaticQuery } from 'gatsby';
import Img from "gatsby-image"

const StyledHeroMenu = styled.div`
  color: ${theme.white};
  padding: ${theme.padding.breathing_room};
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ImgContainer = styled.div`
  flex-grow: 1;
  width: 250px;
  box-shadow: 3px 3px ${theme.third.light}, -1em 0 .4em ${theme.secondary.normal};
  overflow: scroll;
  overflow-scrolling: touch;
`

const HeroMenu = () => (
  <StaticQuery query={graphql`
  query {
    badminton: file(relativePath: { eq: "badminton.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    yeez: file(relativePath: { eq: "yeez.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    silly: file(relativePath: { eq: "silly.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sunrise: file(relativePath: { eq: "sunrise.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`}
  render={(data) => {
    return (
      <StyledHeroMenu>
        <p>TODO HeroMenu</p>
        <p>Yeah basiaclly I should put some info that I want you to see here. Maybe stylized contact info? Anyway, if you have sugguestions for what'd be useful to have here then please contact me.</p>
        <p>I'm less interested with populating this with real data than I am with having made it work</p>
        <p>Check it out. I added images into a component with gatsby. Pretty fun.</p>
        <ImgContainer>
          <Img fluid={data.badminton.childImageSharp.fluid} alt="badminton"/>
          <Img fluid={data.yeez.childImageSharp.fluid} alt="yeez"/>
          <Img fluid={data.silly.childImageSharp.fluid} alt="silly"/>
          <Img fluid={data.sunrise.childImageSharp.fluid} alt="sunrise"/>
        </ImgContainer>
    </StyledHeroMenu>
    )
  }
  }
  />
)

//TODO write this component with content
export default HeroMenu