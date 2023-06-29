import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { AiFillBug } from "react-icons/ai";

function Menu() {
  return (
    <>
      <Navbar expand={false} className="bg-body-tertiary mb-3">
        <Container fluid>
          <Navbar.Toggle />
          <Navbar.Offcanvas
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title >
                <Nav.Link href="/"><AiFillBug /></Nav.Link>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/register">Register</Nav.Link>
                <NavDropdown
                  title="Dropdown"
                >
                  <NavDropdown.Item href="/register">Register</NavDropdown.Item>
                  <NavDropdown.Item href="list">List</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Menu;