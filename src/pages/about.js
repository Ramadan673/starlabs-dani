import React from "react"
import { Link } from "gatsby"
import {Navbar, Button, NavDropdown, Nav, Form, FormControl, Col,Container,Card,CardGroup,Row} from 'react-bootstrap';
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "../components/image"

const About = () => (
    <Layout>
        <SEO title="About  Us" />
        <br/>
        <Container>
            <Row>
                <Col>
                    <h1>UNIQUE IDEAS</h1>
                    <p>
                        Power is a HTML CSS responsive layout from TemplateMo site. You are absolutely free to download, modify and use this template. Please mention your friends about our website. That will be very helpful.

                        Aenean malesuada pretium lectus, a vulputate ligula rhoncus nec. Curabitur id dapibus risus. Integer malesuada iaculis eros sit amet egestas. Sed efficitur massa ut dolor porta varius. Sed porttitor vitae dolor faucibus pulvinar.
                    </p>
                </Col>
                <Col>
                    <Img/>
                </Col>
            </Row>
        </Container>
        <br/>
    </Layout>
)

export default About
