import React, { Fragment } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { ShoppingBag } from "react-feather";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <Fragment>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Link to="/" className="navbar-brand">
                        <ShoppingBag className="feather" /> Store
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                            <Link to="/add" className="nav-link">
                                Add Product
                            </Link>
                            <Link to="/cart" className="nav-link">
                                Cart
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Fragment>
    );
};

export default Header;
