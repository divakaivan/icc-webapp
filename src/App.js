import React from 'react';
import './App.css';
import Header from "./Components/Header";
import Form from "./Components/Form";
import University from "./Components/University";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedUni: ""
        };
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            selectedUni: event.target.value
        })
    }

    render() {
        return (
            <React.Fragment>
                <Header selectedUni={this.state.selectedUni}/>
                <University selectedUni={this.state.selectedUni} handleChange={this.handleChange}/>
                <Form/>
            </React.Fragment>
        )
    }
}

export default App;
