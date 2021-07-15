import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import treats from "./assets/treats.png";

export default class Variation extends Component {
    render() {
        return (
            <div>
                <Container fluid>
                    <Row className="varietyTitle">
                        <h1 style={{ color: "white",fontSize:"48px", margin:"0",fontWeight:"700"}}>We provide for multiple events!</h1>
                    </Row>
                    <Row className="variety">
                        <Col className="icvariety" lg={2}>
                            <img src="https://img.icons8.com/ios-glyphs/124/000000/graduation-cap--v1.png" />

                            <h1 style={({ color: "white", textAlign: "center" })}>
                                Graduations
                            </h1>

                        </Col>

                        <Col className="icvariety" lg={4}>
                            <img src="https://img.icons8.com/ios/124/000000/gender.png" />
                            <h1 style={({ color: "white", textAlign: "center" })}>
                                Gender reveals
                            </h1>
                        </Col>

                        <Col className="icvariety" lg={4}>
                            <img src="https://img.icons8.com/material-rounded/124/000000/birthday.png" />
                            <h1 style={({ color: "white",textAlign: "center" })}>
                                Birthdays
                            </h1>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
