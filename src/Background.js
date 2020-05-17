import React from "react"
import "./Background.css"
import Logo from "./Logo"
import Underpart from "./Underpart"

function Background() {
    return (
        <div id="background">
		    <div id="father">
                <Logo />
                <Underpart />
            </div>
        </div>
    );
}

export default Background;