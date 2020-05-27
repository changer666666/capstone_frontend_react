import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./RightTable.css"

import { Container, Row, Col} from "react-bootstrap";

class RightTable extends React.Component {
    state = {
        id: 1
    };
    constructor(props) {
        super(props);
        this.setState({id: props.imageId});
    }
    componentWillReceiveProps(nextProps) {
        if (this.state.id != nextProps.imageId) {
            console.log("in Righttable componentWillReceiveProps", nextProps.imageId);
            this.setState({id: nextProps.imageid});
            console.log("in Righttable", this.state.id);
            this.render();
        } 
    }

    render() {
        return (
            <Container fluid>
                <Row id="righttable">               
                    <Col id="rocket" >
                        <img src={"RUL_" + this.state.id + ".png"}  alt="RUL image"/>
                    </Col>
                    <Col>
                        <h1 color="white">{this.state.id}</h1>
                    </Col>
                </Row> 
            </Container>
        );
    }
}

export default RightTable

