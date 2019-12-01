import { Link } from 'gatsby';
import styled from 'styled-components';
import theme from '../theme';

const StyledLink = styled(Link)`
  font-size 1.1em;
  text-decoration: underline;
  text-decoration-thickness: 2em;
  text-decoration-color: ${theme.third.normal};

  :hover {
    // background-color: red;
    text-decoration: underline /*dotted*/;
    text-decoration-color: ${theme.secondary.normal};
  }
`

export default StyledLink;