import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const CustomNavbar = () => (
  <Navbar
    style={{
      fontFamily: "Roboto Serif",
      backgroundColor: "rgba(0, 175, 255, 1)"
    }}
    variant="dark"
  >
    <Container>
      <Navbar.Brand href="#home">GoMyMovie </Navbar.Brand>
      <Nav>
        <Nav.Link href="#Accueil">Accueil</Nav.Link>
        <Nav.Link href="#Club">Film</Nav.Link>
        <Nav.Link href="#Joueurs">Crédit</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);

export default CustomNavbar;
