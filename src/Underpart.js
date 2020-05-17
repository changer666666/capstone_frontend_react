import React from "react"
import LeftMenu from "./LeftMenu"
import RightTable from "./RightTable"
import "./Underpart.css"

function Underpart() {
    return (
        <div id="underpart">
            <div id="underpartcontent">
                <LeftMenu/>
                <RightTable />
            </div>
        </div>
    )
}
export default Underpart