import React from "react"
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./RightTable.css"

import { Container, Row, Col} from "react-bootstrap";

class RightTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageId : "1",
            source: ""
        }
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.imageId !== nextProps.imageId) {
            // console.log("in Righttable componentWillReceiveProps", nextProps.imageId);
            // this.state.imageId = nextProps.imageId;
            // // this.setState({ imageId: nextProps.imageid });
            // console.log("in Righttable", this.state.imageId);
        
            axios.get("http://localhost:5000/mosfet/" + nextProps.imageId, { responseType: 'arraybuffer' }).then((response) => {
                const base64 = btoa(
                    new Uint8Array(response.data).reduce(
                      (data, byte) => data + String.fromCharCode(byte),
                      '',
                    ),
                );
                this.setState({ source: "data:;base64," + base64 });
            });
        }
    }
    render() {
        return (
            <Container fluid>
                <Row id="righttable">               
                    <Col id="table" >
                        <img src={this.state.source}  alt="RUL"/>
                    </Col>
                </Row> 
            </Container>
        );
    }
}

export default RightTable

