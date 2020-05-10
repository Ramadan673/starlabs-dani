/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Button, NavDropdown, Nav, Form, FormControl, Col,Container,Card,CardGroup,Row} from 'react-bootstrap';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div

      >
        <main>{children}</main>

          <footer>
              <Container>
                  <Row>
                      <Col>  <p className="footer-para">Copyright &copy; 2020 Company Name<br/>
                          Design: TemplateMo</p></Col>
                      <Col>
                          <ul className="social-icons">
                              <li><a className="social-icons-href" href="#">Facebook</a></li>
                              <li><a className="social-icons-href" href="#">Twitter</a></li>
                              <li><a className="social-icons-href" href="#">Linkedin</a></li>
                              <li><a className="social-icons-href" href="#">Instagram</a></li>
                          </ul>
                      </Col>
                      <Col>
                          <div className="back-to-top">
                              <a className="tp" href="#top">
                                  <i className="fa fa-angle-up">^</i>
                                  back to top
                              </a>
                          </div>
                      </Col>
                  </Row>
              </Container>
          </footer>
      </div>

    </>
  )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout

