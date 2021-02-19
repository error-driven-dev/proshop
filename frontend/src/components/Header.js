import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
export const Header = () => {
  return (
    <header>
<Navbar bg="dark" variant='dark' expand="lg">
  <Container>
      <Navbar.Brand href="#home">ProShop</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/cart">
            <FontAwesomeIcon className="mr-1" icon={faShoppingCart}> </FontAwesomeIcon>
         Cart</Nav.Link>
          <Nav.Link href="/login">Log In</Nav.Link>
        </Nav>
      </Navbar.Collapse>
  </Container>
</Navbar>
    </header>
  )
}
