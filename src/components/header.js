import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react";
 import "../css/header.css";
import {Navbar, Button, NavDropdown, Nav, Form, FormControl, Col,Container,Card,CardGroup} from 'react-bootstrap';
import "../css/banner.css"

const Header = ({ siteTitle }) => (
  <header>
    <div className="banner">
      <div className="container">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand className="logo" href="/">POWER</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav className="mr-auto">
                <Nav.Item as="li">
                  <Link to="/" className="nav-link" activeClassName="active">HOME</Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Link to="/about" className="nav-link"activeClassName="active">ABOUT US</Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Link to="/json-at-buildtime" className="nav-link"activeClassName="active">PORTFOLIO</Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Link to="/blog" className="nav-link"activeClassName="active">BLOG ENTRIES</Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Link to="/sportet" className="nav-link"activeClassName="active">POSTS</Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Link to="/contact" className="nav-link"activeClassName="active">CONTACT</Link>
                </Nav.Item>
              </Nav>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div> <h6 className="design">DESIGNED WITH LOVE</h6>
      <h2 className="banner-content">THE POWER THEME</h2>
      {/*<button className="button-discover">DISCOVER MORE</button>*/}
    </div>


  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
