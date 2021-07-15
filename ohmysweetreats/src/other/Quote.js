import React, { Component } from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import FormCheck from 'react-bootstrap/FormCheck';
import FormControl from 'react-bootstrap/FormControl';

export default class Quote extends Component {
    
   
 
  
    render() {

        return (
            <div>
                <Container fluid>
                    <Row className="titleOptions">
                        <h1 style={{ fontSize: "48px", fontWeight: "700" }}>Request a quote!</h1>
                    </Row>
                </Container>

                <Container fluid  >
                    <Form noValidate   className="myForm">
                        <h1 style={{borderBottom:"1px solid black", paddingBottom:"10px"}}>Customer Information</h1>
                        <Row className="mb-3">
                            <Form.Group className="pr-3" as={Col} controlId="validationCustom01">
                                <Form.Label>First name</Form.Label>
                                <Form.Control type="text" placeholder="Enter First name" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="validationCustom02">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Last name" />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="validationCustom01">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control type="tel" placeholder="(xxx)-xxx-xxxx" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="validationCustom02">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="text" placeholder="name@example.com" />
                            </Form.Group>
                        </Row>
 
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
            
                </Container>



            </div>


        )
    }
}
