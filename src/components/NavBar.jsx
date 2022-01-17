import React from "react";

function Navbar(props) {
    return (
        <header className="container-fluid fixed-top" >           
            <h1 className="col-sm-8">Celebrity Memory Game</h1>
            <nav className="col-sm-4">
                <p>Score: <span>{props.currentScore}</span></p>
                <p>Top Score: <span>{props.highScore}</span> </p>
                {props.children}
            </nav>            
        </header>        
    )
}

export default Navbar;