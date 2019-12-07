import React from "react";
import "../Stylesheets/header.css";

class Header extends React.Component {
    render() {
        return(
            <div className="header">
                {this.props.selectedUni ? <h1>Welcome to {this.props.selectedUni}</h1> : <h1>Welcome to Uni</h1>}
                <p>Find course mates by typing in your major</p>
            </div>
        )
    }
}

export default Header;