import React from "react";
import reactLogo from "../images/react-icon-small.png"
function Navbar(){
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={reactLogo} />
                <h1>ReactFacts</h1>
            </div>
            <h4>React Course - Project 1</h4>

        </nav>
    )
}

export default Navbar