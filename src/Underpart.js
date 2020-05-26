import React from "react"
import LeftMenu from "./LeftMenu"
import RightTable from "./RightTable"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Underpart.css"
import { Container, Row, Col} from "react-bootstrap";

function Underpart() {
    return (
        <Container fluid>
            <Row className="row1">
                <Col lg={{span: 2}} className="underpartcol1 d-none d-xl-block">
                    <LeftMenu />
                </Col>
                <Col lg={{span: 9}}>
                    <RightTable />
                </Col>
            </Row>
        </Container>
    )
}
export default Underpart