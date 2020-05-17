import React from "react"
import "./RightTable.css"

function RightTable() {
    return (
        <div id="righttable">
            <div className="charts text-center">
                <div className="row">
                    <div id="supplyV">
                    </div>
                </div>
                <hr />

                <div id="vis-tooltip" className="vg-tooltip">
                </div>
            </div>

            <link rel="stlesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/vega-tooltip@0.16.0/vega-tooltip.scss" />
		    <script src="https://cdn.jsdelivr.net/npm/vega-tooltip@0.16.0/build/vega-tooltip.min.js"></script>
        
        </div>
    );
}

export default RightTable

