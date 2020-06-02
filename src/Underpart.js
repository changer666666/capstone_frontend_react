import React from "react"
import LeftMenu from "./LeftMenu"
import RightTable from "./RightTable"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Underpart.css"
import { Container, Row, Col} from "react-bootstrap";

class Underpart extends React.Component {
    constructor() {
        super();
        this.state = {
            imageId : 1
        }
    }

    render() {
        return (
            <Container fluid style={{ margiLeft: 0, marginRight: 0, paddingLeft: 0, paddingRight: 0 }}>
                <Row className="row1">
                    <Col className="underpartcol1 d-none d-xl-block">
                        <LeftMenu fun={this.getImageId}/>
                    </Col>
                </Row>
                <Row className="row1">
                    <Col lg={{span: 6}}>
                        <RightTable imageId={this.state.imageId}/>
                    </Col>
                </Row>
            </Container>
        )
    }

    getImageId = (imageId) => {
        this.setState({ imageId: imageId });
        console.log("in Underpart ", this.state.imageId);
    }
}

export default Underpart