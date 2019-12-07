import React from "react";
import "../Stylesheets/form.css";
import ChatObj from "./ChatObj";

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

    handleClick(event) {
        event.preventDefault();
        this.setState({
            submitted: true
        })
    }

    render() {
        const cssClasses = [
            'form',
            this.props.selectedUni ? 'formShow' : 'form'
        ];
        const {userSearch, submitted} = this.state;
        return (
            <div className={cssClasses.join(' ')}>
                <form>
                    <label>Enter your major:</label>
                    <span className="tooltip">
                        <input className="formInput"
                               name="userSearch"
                               type="text"
                               value={userSearch}
                               onChange={this.handleChange}/>
                        <span className="tooltip-text">Enter your major. E.g. accounting, finance, etc.</span>
                    </span>
                    <input className="formSearchBtn" type="submit" onClick={this.handleClick}/>
                </form>
                {submitted && ChatObj.hasOwnProperty(userSearch) ?
                    ChatObj[userSearch] : submitted && userSearch === '' ?
                        'Please enter your major' : submitted && userSearch !== '' ?
                            'Currently there is no chat set up for your major' : null}
            </div>
        );
    }
}

export default Form;