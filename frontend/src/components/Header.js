// import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";

const Header = ({ children }) => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand className="p-2">Employee Management</Navbar.Brand>
      </Navbar>
      <Container>{children}</Container>
    </>
  );
};

export default Header;
