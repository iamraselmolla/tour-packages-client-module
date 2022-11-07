import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Link tp="/"><Navbar.Brand> <img src="logo.png" width="80" alt="" srcset="" /> </Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink className="text-decoration-none px-3 fw-bolder text-black" to="/">Home</NavLink>
                        <NavLink className="text-decoration-none px-3 fw-bolder text-black" to="/packages">Packages</NavLink>
                        <NavLink className="text-decoration-none px-3 fw-bolder text-black" to="/blog">Blog</NavLink>
                        <NavLink className="text-decoration-none px-3 fw-bolder text-black" to="/add-a-package">Add a Package</NavLink>
                        <NavLink className="text-decoration-none px-3 fw-bolder text-black" to="/">Login</NavLink>
                        <NavLink className="text-decoration-none px-3 fw-bolder text-black" to="/">Register</NavLink>
                        <NavLink className="text-decoration-none px-3 fw-bolder text-black" >Logout</NavLink>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;