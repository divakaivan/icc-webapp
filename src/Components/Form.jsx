import React from "react";
import "../Stylesheets/form.css";

class Form extends React.Component {
    render() {
        return (
            <div>
                <form className="form">
                    <label>Enter your major:</label>
                    <input className="formInput" type="text"/>
                    <button className="formSearchBtn">Search</button>
                </form>
            </div>
        );
    }
}

export default Form;