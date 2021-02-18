import React from 'react'
import {Header} from './components/Header'
import {Footer} from './components/Footer'
import { Container } from 'react-bootstrap'
import { HomePage } from './pages/HomePage'
import { Link, Route, BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <>
    <Header></Header>
<main>
  <Container> <Router>
    <Route>
    <HomePage></HomePage>
    </Route>
  </Router>

  </Container>
</main>
<Footer></Footer>
    </>
  );
}

export default App;
