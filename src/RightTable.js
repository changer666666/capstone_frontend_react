import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./RightTable.css"

import { Container, Row, Col} from "react-bootstrap";

function Trim(str){ 
  return str.replace(/(^\s*)|(\s*$)/g, ""); 
}

class RightTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageId : "1"
        }
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.imageId !== nextProps.imageId) {
            console.log("in Righttable componentWillReceiveProps", nextProps.imageId);
            this.state.imageId = nextProps.imageId;
            // this.setState({ imageId: nextProps.imageid });
            console.log("in Righttable", this.state.imageId);
        } 
    }
    render() {
        return (
            <Container fluid>
                <Row id="righttable">               
                    <Col id="rocket" >
                        <img src={"RUL_" + this.state.imageId + ".png"}  alt="RUL"/>
                    </Col>
                </Row> 
            </Container>
        );
    }
}

export default RightTable

