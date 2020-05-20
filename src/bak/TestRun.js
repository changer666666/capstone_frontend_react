import React from "react"
import "./TagSelect.css"

function TestRun() {
    return(
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
    )
}

export default TestRun