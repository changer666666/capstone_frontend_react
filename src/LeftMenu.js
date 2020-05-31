import React, {Component} from "react"
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./LeftMenu.css"
import { Container, Row, Col} from 'react-bootstrap';

class LeftMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataset: "NASA_Ames_MOSFET_Data",
            testrun: "1",
            parameter: "Drain_Source_Resistance_Time",
            datasetOptions: [],
            testRunOptions: []
        };
    }
    componentDidMount() {
        axios.get("http://localhost:5000/datasetOptions").then((response) => {
            console.log(response.data.datasetOptions.datasetList);
            this.setState({datasetOptions: response.data.datasetOptions.datasetList});
            console.log(this.state.datasetOptions);
        });
        axios.get("http://localhost:5000/testRunOptions").then((response) => {
            console.log(response.data.testRunOptions.testRunList);
            this.setState({testRunOptions: response.data.testRunOptions.testRunList});
            console.log(this.state.testRunOptions);
        });
    }
    handleDataset(event) {
        console.log(event.target.value);
        this.setState({dataset: event.target.value});
    }
    handleTestRun(event) {
        console.log(event.target.value);
        this.setState({testrun: event.target.value});
    }
    getTable() {
        // axios.put("http://localhost:5000/test", "data=" + this.state.testrun).then((response) =>{
        //     console.log("response", response);
        // }, (error) => {
        //     console.log("error", error);
        // });

        //send image id back to Underpart component
        // console.log(this.state.testrun);
        this.props.fun(this.state.testrun);
    }
    handleChange = selectedOption => {
        this.setState(
          { selectedOption },
          () => console.log(`Option selected:`, selectedOption)
        );
    }
    handleChange = selectedOption => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    };
    render() {
        return(
            <Container fluid style={{backgroundColor: "#202028"}}>
                <Row className="menuRow">
                    <Col className="menutag" id="dataset" lg={{span: 2, offset: 1}}>
                        <p><font color="#C4C7D1" size="6" face="Arial"> DATASET </font></p>
                        
                    </Col>
                    <Col className="menutag" id="dataset" lg={{span: 2}}>
                        <div className="select1">
                            <select name = "datasetSelect" id="datasetSelect" onChange={this.handleDataset.bind(this)}>
                                {this.state.datasetOptions.map((option) => (
                                    <option value = {option.value} > {option.label} </option>
                                ))}
                            </select>
                        </div>
                    </Col>

                    <Col className="menutag" id="testRun" lg={{span: 2}}>
                        <p><font color="#C4C7D1" size="6" face="Arial"> TEST & RUN </font></p>
                    </Col>
                    <Col className="menutag" id="testRun" lg={{span: 2}}>
                        <div className="select1">
                            <select name="testRunSelect" id="testRunSelect" onChange={this.handleTestRun.bind(this)}>
                                {this.state.testRunOptions.map((option) => (
                                    <option value = {option.value} > {option.label} </option>
                                ))}
                            </select>
                        </div>
                    </Col>

                    <Col id="blastoff" lg={{span: 2}} >
                        <button name="button" id="button" value="" onClick={this.getTable.bind(this)}/>   
                    </Col>
                </Row> 
            </Container>
        )
    }
}

export default LeftMenu