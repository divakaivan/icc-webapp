import React from "react";
import "../Stylesheets/form.css";
import H3Header from "./H3Header";
import Info from "./Info";
import Result from "./Result";

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
            [event.target.name]: event.target.value.toLowerCase(),
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
        const {selectedUni} = this.props;
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
                    <Result submitted={submitted} userSearch={userSearch} selectedUni={selectedUni}/>
                </div>
            </React.Fragment>
        );
    }
}

export default Form;