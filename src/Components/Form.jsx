import React from "react";
import "../Stylesheets/form.css";
import ChatObj from "./ChatObj";
import H3Header from "./H3Header";
import Info from "./Info";

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
            <React.Fragment>
                <div className={cssClasses.join(' ')}>
                    <H3Header text={"Step 2: Enter your major"}/>
                    <form>
                        <Info tooltipText="E.g. finance, computer science">
                            <input className="formInput"
                                   name="userSearch"
                                   type="text"
                                   value={userSearch}
                                   onChange={this.handleChange}/>
                        </Info>
                        <input className="formSearchBtn" value="Search" type="submit" onClick={this.handleClick}/>
                    </form>
                    {submitted && ChatObj.hasOwnProperty(userSearch) ?
                        ChatObj[userSearch] : submitted && userSearch === '' ?
                            <span
                                id="enter-major-warn">Please enter your major</span> : submitted && userSearch !== '' ?
                                'Currently there is no chat set up for your major' : null}
                </div>
            </React.Fragment>
        );
    }
}

export default Form;