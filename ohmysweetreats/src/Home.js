import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import treats from "./assets/treats.png"; 
class Home extends Component {
    render() {
        return (
            <div>

            <Container fluid>
                <Row id="smt">
             
                    <Col md={1} id="desc">
                        <h1 style={{fontWeight: "700"},{color: "#191b22"},{fontSize:"42px"}}>What are you cravings?</h1>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                        <a href="#" style={{textDecoration: "none"}}><button id="learn-MoreBtn">Learn More</button></a> 
                    </Col>
                    <Col lg={5} id="imgTreats">
                        <img  className="img-fluid" src={treats}   ></img>
                    </Col>
          
                </Row>
            </Container>
         
            
             
            </div>
              
   
        )
    }
}
export default Home;