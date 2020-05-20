import React from "react"
import "./TagSelect.css"

function Dataset() {
    return (
        <div className="menutag" id="dataset">
            <p><font color="#C4C7D1" size="6" face="Arial"> DATASET </font></p>
            <div className="select1">
                <select name = "datasetSelect" id="datasetSelect">
                    <option value ="MOSFET_Data">NASA_Ames_MOSFET_Data</option>
                </select>
            </div>
        </div>
    )
}

export default Dataset