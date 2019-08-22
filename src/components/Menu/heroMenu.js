import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';
import { graphql, StaticQuery } from 'gatsby';
import Img from "gatsby-image"

const StyledHeroMenu = styled.div`
  color: ${theme.white};
  padding: ${theme.padding.breathing_room};
  text-align: center;
`

const HeroMenu = () => (
  <StaticQuery query={graphql`
  query {
    badminton: file(relativePath: { eq: "badminton.jpg" }) {
      childImageSharp {
        fixed(width: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    yeez: file(relativePath: { eq: "yeez.jpg" }) {
      childImageSharp {
        fixed(width: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`}
  render={(data) => {
    return (
      <StyledHeroMenu>
        <p>TODO HeroMenu</p>
        <p>Yeah basiaclly I should put some info that I want you to see here. Maybe stylized contact info? Idk if you have sugguestions for what'd be uSeFUl tO HaVe here then please contact me.</p>
        <p>Anyway here are two pictures of me until then</p>
        <Img fixed={data.badminton.childImageSharp.fixed} alt="yeez"/>
        <br></br>
        <Img fixed={data.yeez.childImageSharp.fixed} alt="yeez"/>
    </StyledHeroMenu>
    )
  }
  }
  />
)

//TODO write this component with content
export default HeroMenu