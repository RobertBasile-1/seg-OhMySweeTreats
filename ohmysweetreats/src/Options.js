import React, { Component } from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image';
import smash from "./assets/smasheart.png";
import letter from "./assets/letterbox1.png";
import treatbox from "./assets/treatsbox1.png";

export default class Options extends Component {
    render() {
        return (
            <div>
                <Container fluid>
                    <Row className="titleOptions">
                        <h1 style={{ fontSize: "48px", fontWeight: "700" }}>A wide variety of treats!</h1>
                    </Row>
                    <Row>
                        
                            <div className="zoom">
                                <Image src={smash} width="700" height="600"/>
                            </div>
              
                    </Row>

                    <Row >
                        <Col className="zoom col">
                            <div className="zoom g">
                                <Image src={letter}width="700" height="600"/>
                            </div>
                        </Col>
                        <Col className="zoom col" >
                            <div className="zoom c">
                                <Image src={treatbox} width="700" height="600" />
                            </div>
                        </Col>
                    </Row>

                     

                </Container>
            </div>
        )
    }
}

