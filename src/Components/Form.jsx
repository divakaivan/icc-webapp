import React from "react";
import "../Stylesheets/form.css";

const chatObj = {
    "Accounting": "link_to_accounting",
    "Computer Science": "link_to_cs"
};

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userSearch: "",
            submitted: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleSubmit(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleClick(e) {
        e.preventDefault();
        this.setState({
            submitted: true
        })
    }

    render() {
        return (
            <div>
                <form className="form" onSubmit={this.handleSubmit}>
                    <label>Enter your major:</label>
                    <input className="formInput" name="userSearch" type="text" value={this.state.userSearch} onChange={this.handleSubmit}/>
                    <input className="formSearchBtn" type="submit" onClick={this.handleClick}/>
                </form>
                {this.state.submitted ? <p>{chatObj[this.state.userSearch]}</p> : null}
            </div>
        );
    }
}

export default Form;