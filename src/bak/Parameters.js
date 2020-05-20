import React from "react"
import "./TagSelect.css"

function Parameter() {
    return (
        <div className="menutag" id="parameters">
            <p><font color="#C4C7D1" size="6" face="Arial"> PARAMETERS </font></p>
            <div className="select1">
                <select name="parametersSelect" id="parametersSelect">
                    <option value ="Drain_Source_Resistance_Time">Drain_Source_Resistance_Time</option>
                </select>
            </div>
        </div>
    )
}

export default Parameter