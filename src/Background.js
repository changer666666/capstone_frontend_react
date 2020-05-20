import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Background.css"
import Logo from "./Logo"
import Underpart from "./Underpart"
import { Container, Row, Col} from "react-bootstrap";



function Background() {
    return (
        <Container fluid>
            <Row>
                <Col className="col1" >
                    <div id="father" style={{backgroundColor: "#181820"}}>
                        <Logo />
                        
                        <Underpart />
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Background;