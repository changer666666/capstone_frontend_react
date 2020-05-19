import React, {Component} from "react"
import axios from "axios"
import "./LeftMenu.css"

import { Button, DropdownButton, MenuItem, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class LeftMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataset: "NASA_Ames_MOSFET_Data",
            testrun: "Test_1_Run_1",
            parameter: "Drain_Source_Resistance_Time"
        };
    }
    componentDidMount() {
        axios.get("http://localhost:5000/test").then((response) => {
            console.log(response.data);
        });
    }
    handleDataset(event) {
        console.log(event.target.value);
        this.setState({dataset: event.target.value});
    }
    handleTestRun (event) {
        console.log(event.target.value);
        this.setState({testrun: event.target.value});
    }
    handleParameter (event) {
        console.log(event.target.value);
        this.setState({parameter: event.target.value});
    }
    getTable() {
        axios.put("http://localhost:5000/test", "data=" + this.state.testrun).then((response) =>{
            console.log("response", response);
        }, (error) => {
            console.log("error", error);
        });
    }
    render() {
        return(
            <div id="leftmenu">
                <div className="menutag" id="dataset">
                    <p><font color="#C4C7D1" size="6" face="Arial"> DATASET </font></p>

                    <div className="select1">
                        <select name = "datasetSelect" id="datasetSelect" onChange={this.handleDataset.bind(this)}>
                            <option value ="NASA_Ames_MOSFET_Data">NASA_Ames_MOSFET_Data</option>
                        </select>
					</div>
                </div>

                <div className="menutag" id="testRun">
                    <p><font color="#C4C7D1" size="6" face="Arial"> TEST & RUN </font></p>
                    <div className="select1">
                        <select name="testRunSelect" id="testRunSelect" onChange={this.handleTestRun.bind(this)}>
                            <option value ="Test_1_Run_1">MOSFET_#1</option>
                            <option value ="Test_2_Run_1">MOSFET_#2</option>
                            <option value ="Test_3_Run_1">MOSFET_#3</option>
                            <option value ="Test_4_Run_1">MOSFET_#4</option>
                            <option value ="Test_5_Run_1">MOSFET_#5</option>
                            <option value ="Test_6_Run_1">MOSFET_#6</option>
                            <option value ="Test_7_Run_1">MOSFET_#7</option>
                            <option value ="Test_8_Run_1">MOSFET_#8</option>
                            <option value ="Test_9_Run_1">MOSFET_#9</option>
                            <option value ="Test_10_Run_1">MOSFET_#10</option>
                            <option value ="Test_36_Run_1">MOSFET_#36</option>
                        </select>
                    </div>
                </div>
                
                <div className="menutag" id="parameters">
                    <p><font color="#C4C7D1" size="6" face="Arial"> PARAMETERS </font></p>
                    <div className="select1">
                        <select name="parametersSelect" id="parametersSelect" onChange={this.handleParameter.bind(this)}>
                            <option value ="Drain_Source_Resistance_Time">Drain_Source_Resistance_Time</option>
                        </select>
                    </div>
                </div>

                <div id="blastoff">
                    <button name="button" id="button" value="" onClick={this.getTable.bind(this)}/>
                </div>                        

                <div id="rocket">
                    <img src="rocket.png" alt="" width = "50px" height="90px"/>
                </div>
            </div>
        )
    }
}

export default LeftMenu