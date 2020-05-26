import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Logo.css"
import { Container, Row, Col } from "react-bootstrap";

function Logo() {
    return (
        <Container fluid>
            <Row className="row1" style={{backgroundColor: "#202028"}}>
                <Col lg={{span: 3, offset: 1}} className="d-none d-lg-block">
                    <img src="lm_logo_new.png" alt="lockheed_martin_image" width = "360px" height="100px"/>
                </Col>
                <Col lg={{span: 5}}className="d-none d-sm-block">
                    <img src="title_logo_new.png" alt="title_image" width = "600px" height="100px"/>
                </Col>
                <Col lg={{span: 3}} className="d-none d-xl-block">
                    <img src="uw_logo_new.png" alt="uw_image" width = "240px" height="100px" />
                </Col>
            </Row>
        </Container>
        
    );
}

export default Logo;