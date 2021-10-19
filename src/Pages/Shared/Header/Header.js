import React from 'react';
import logo from "../../../images/logo.jpg";
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
        <Container>
          <img src={logo} alt="" />
          <Navbar.Brand href="#home">Popular Healthcare</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">

            <Nav.Link as={HashLink} to="/home#home" className="text-light">Home</Nav.Link>
            <Nav.Link as={HashLink} to="/about#about" className="text-light">About Us</Nav.Link>
            <Nav.Link as={HashLink} to="/services#services" className="text-light">Services</Nav.Link>
            <Nav.Link as={HashLink} to="/doctors#doctors" className="text-light">Doctors</Nav.Link>
            <Nav.Link as={HashLink} to="/contacts#contacts" className="text-light">Contacts</Nav.Link>
            {user?.email ?
              <Button onClick={logOut} variant="light">Logout</Button> :
              <Nav.Link as={Link} to="/login" className="text-light">Login</Nav.Link>}
            <Navbar.Text>
              Signed in as: <a href="#login">{user?.displayName}</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;