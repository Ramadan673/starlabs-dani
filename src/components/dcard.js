import React from "react"
import {Card,CardGroup} from 'react-bootstrap';
import Images from "../images/first-service-icon.png";
import Images2 from "../images/second-service-icon.png";
import Images3 from "../images/third-service-icon.png";
function Dcard(props) {
    return (
        <CardGroup>
            <Card>

                <Card.Body className="card-one">
                    <Card.Img variant="top" src={Images} />
                    <Card.Title>
                        <h4>
                            Mobile Ready
                        </h4>
                    </Card.Title>
                    <Card.Text>
                        <p>  Aenean ac ultricies nisl. Nullam vitae aliquam velit. Vestibulum a ex eget arcu accumsan luctus at vitae urna. Vestibulum ante ipsum primis in faucibus.</p>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card>

                <Card.Body className="card-two">
                    <Card.Img variant="top" src={Images2} />
                    <Card.Title>

                        <h4>HTML CSS</h4>

                    </Card.Title>
                    <Card.Text>
                        <p>Aenean ac ultricies nisl. Nullam vitae aliquam velit. Vestibulum a ex eget arcu accumsan luctus at vitae urna. Vestibulum ante ipsum primis in faucibus.</p>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card>

                <Card.Body className="card-three">
                    <Card.Img variant="top" src={Images3} />
                    <Card.Title>
                        <h4>
                            RESPONSIVE DESIGN
                        </h4>

                    </Card.Title>
                    <Card.Text>
                        <p>Aenean ac ultricies nisl. Nullam vitae aliquam velit. Vestibulum a ex eget arcu accumsan luctus at vitae urna. Vestibulum ante ipsum primis in faucibus.</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </CardGroup>
    )
}

export default Dcard