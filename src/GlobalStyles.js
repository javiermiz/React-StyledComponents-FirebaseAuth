import { createGlobalStyle } from "styled-components"
import { Colors, Fonts } from "./Theme"

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;500&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    background-color: ${Colors.BODY_BACKGROUND};
    color: ${Colors.BODY_TEXT};
    font-family: ${Fonts.PRIMARY};
    font-size: 16px;
    font-weight: 300;
    padding: 0;
    margin: 0;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
    margin: 0;
  }

  p {
    margin: 0;
  }

  a {
    color: ${Colors.ANCHORS};
    text-decoration: none;
    font-weight: 400;
  }
`

export { GlobalStyles }