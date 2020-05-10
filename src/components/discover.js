import React from "react"
import {Col, Container} from "react-bootstrap";
import JSONData from "../../content/dhena";
function Discover(props) {
    return (
        <Container className="discover" fluid>

            <Col>
                <h1>{JSONData.title}</h1>
                <p>{JSONData.content.map((data, index) => {
                    return <p key={`content_item_${index}`}>{data.item}</p>
                })}</p>
                <button className="button-discover">
                    {JSONData.content.map((data, index) => {
                        return <p key={`content_item1_${index}`}>{data.item1}</p>
                    })}

                </button>

            </Col>

        </Container>
    )
}

export default Discover