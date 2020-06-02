import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Background.css"
import Logo from "./Logo"
import Underpart from "./Underpart"
import { Container, Row, Col} from "react-bootstrap";



function Background() {
    return (
        <Container fluid style={{ margiLeft: 0, marginRight: 0, paddingLeft: 0, paddingRight: 0 }}>
            <Row style={{ margiLeft: 0, marginRight: 0, paddingLeft: 0, paddingRight: 0}}>
                <Col className="col1" style={{ paddingLeft: 0, paddingRight: 0 }}>
                    <div id="father" style={{backgroundColor: "#181820", paddingLeft: 0, paddingRight: 0 }}>
                        <Logo />
                        
                        <Underpart />
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Background;