import React, {Component} from "react"
import axios from "axios"
import "./LeftMenu.css"
import Dataset from "./Dataset"
import TestRun from "./TestRun"
import Parameters from "./Parameters"

import { Button, DropdownButton, MenuItem, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class LeftMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataset: "",
            testrun: "",
            parameters: ""
        };
    }
    componentDidMount() {
        axios.get("http://localhost:5000/data/supplyV").then((response) => {
            console.log(response.data);
        });
    }
    handleDataset(evt) {
        console.log(evt);
        this.setState({dataset: evt});
        console.log("dataset: " + this.state.dataset);
    }
    render() {
        return(
            <div id="leftmenu">
                <div className="menutag" id="dataset">
                    <p><font color="#C4C7D1" size="6" face="Arial"> DATASET </font></p>

                    <DropdownButton id="DATASET" title="DATASET" onSelect={() => this.handleDataset()}>
                        <Dropdown.Item eventKey="NASA_Ames_MOSFET_Data">NASA_Ames_MOSFET_Data</Dropdown.Item>
                    </DropdownButton>
                </div>

                <div className="menutag" id="testRun">
                    <p><font color="#C4C7D1" size="6" face="Arial"> TEST & RUN </font></p>
                    <div className="select1">
                        <select name="testRunSelect" id="testRunSelect">
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
                <Parameters />

                <div id="blastoff">
                    <button name="button" id="button" value="" />
                </div>                        

                <div id="rocket">
                    <img src="rocket.png" alt="" width = "50px" height="90px"/>
                </div>
            </div>
        )
    }
}

export default LeftMenu