import React from "react"
import { Container } from "react-bootstrap"
import { AuthProvider } from "./contexts/AuthContext"
import { createGlobalStyle } from "styled-components"
import { Colors, Fonts } from "./Theme"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./pages/Home"
import Admin from "./pages/Admin"
import Login from "./pages/Login"
import PrivateRoute from "./components/PrivateRoute"
import ForgotPassword from "./pages/ForgotPassword"
import { Helmet, HelmetProvider } from 'react-helmet-async';

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

function App() {
  return (
    <HelmetProvider>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>My Title</title>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet" />
        </Helmet>
        <GlobalStyles />
        <Router>
          <AuthProvider>
            <Switch>
              <Route exact path="/" component={Home} />
              <PrivateRoute path="/admin" component={Admin} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
      </Container>
    </HelmetProvider>
  )
}

export default App
