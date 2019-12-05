import React from "react";
import "../Stylesheets/header.css";

class Header extends React.Component {
    render() {
        return(
            <div className="header">
                <h1>Welcome to Uni</h1>
                <p>Find course mates by typing in your major</p>
            </div>
        )
    }
}

export default Header;