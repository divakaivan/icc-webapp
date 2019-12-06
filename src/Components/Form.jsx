import React from "react";
import "../Stylesheets/form.css";

const chatObj = {
    "accounting": "link_to_accounting",
    "computer science": "link_to_cs",
    "finance": "link_to_finance"
};

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userSearch: "",
            submitted: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
            submitted: false
        });
    };

    handleClick(e) {
        e.preventDefault();
        this.setState({
            submitted: true
        })
    }

    render() {
        const {userSearch, submitted} = this.state;
        return (
            <div>
                <form className="form">
                    <label>Enter your major:</label>
                    <input className="formInput" name="userSearch" type="text" value={userSearch} onChange={this.handleChange}/>
                    <input className="formSearchBtn" type="submit" onClick={this.handleClick}/>
                </form>
                {submitted && chatObj.hasOwnProperty(userSearch) ? chatObj[userSearch] : null}
            </div>
        );
    }
}

export default Form;