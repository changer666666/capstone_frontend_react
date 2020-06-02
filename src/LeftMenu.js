import React, {Component} from "react"
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col} from 'react-bootstrap';
import "./LeftMenu.css"

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
            <Container fluid style={{backgroundColor: "#202028", margiLeft: 0, marginRight: 0, paddingLeft: 0, paddingRight: 0 }}>
                <Row className="menuRow">
                    <Col lg={{span: 4, offset: 1}}>
                        <div className="numberStyle menutag">
                            <img src="number1.png" width="30px" height="30px" alt="number1"></img>
                        </div>
                        <div className="menutag">
                            <p>&nbsp;&nbsp;&nbsp;</p>
                        </div>
                        <div className="menutag" id="dataset">
                            <p><font color="#C4C7D1" size="6" face="Arial" > DATASET </font></p>
                        </div>
                        <div className="menutag" id="dataset">
                            <div className="select1">
                                <select name = "datasetSelect" id="datasetSelect" onChange={this.handleDataset.bind(this)}>
                                    {this.state.datasetOptions.map((option) => (
                                        <option value = {option.value} > {option.label} </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </Col>

                    <Col lg={{span: 4}}>
                        <div className="numberStyle menutag">
                            <img src="number2.png" width="30px" height="30px" alt="number2"></img>
                        </div>
                        <div className="menutag">
                            <p>&nbsp;&nbsp;&nbsp;</p>
                        </div>
                        <div className="menutag" id="testRun">
                            <p><font color="#C4C7D1" size="6" face="Arial"> TEST&RUN </font></p>
                        </div>
                        <div className="menutag" id="testRun">
                            <div className="select1">
                                <select name="testRunSelect" id="testRunSelect" onChange={this.handleTestRun.bind(this)}>
                                    {this.state.testRunOptions.map((option) => (
                                        <option value = {option.value} > {option.label} </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </Col>


                    <Col lg={{span: 3}}>
                        <div className="numberStyle menutag">
                            <img src="number3.png" width="30px" height="30px"  alt="number3"></img>
                        </div>
                        <div className="menutag">
                            <p>&nbsp;&nbsp;&nbsp;</p>
                        </div>
                        <div className="menutag" id="blastoff" >
                            <button name="button" id="button" value="" onClick={this.getTable.bind(this)}/>   
                        </div>
                    </Col>
                </Row> 
            </Container>
        )
    }
}

export default LeftMenu