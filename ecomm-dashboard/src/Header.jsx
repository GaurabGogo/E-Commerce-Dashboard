import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Ecomm</Navbar.Brand>
        <Nav className="me-auto text-gray-200 flex gap-4 items-center">
          <Link to="/add">Add Product</Link>
          <Link to="/update">Update Products</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
