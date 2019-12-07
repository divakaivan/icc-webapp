import React from 'react';
import './App.css';
import Header from "./Components/Header";
import Form from "./Components/Form";
import University from "./Components/University";
import H3Header from "./Components/H3Header";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedUni: ""
        };
        this.handleUniChange = this.handleUniChange.bind(this)
    }

    handleUniChange(event) {
        this.setState({
            selectedUni: event.target.value
        })
    }

    render() {
        return (
            <React.Fragment>
                <Header selectedUni={this.state.selectedUni}/>
                <H3Header selectedUni={this.state.selectedUni} text={"Step 1: Choose your university"}/>
                <University selectedUni={this.state.selectedUni} handleChange={this.handleUniChange}/>
                {this.state.selectedUni ? <Form selectedUni={this.state.selectedUni}/> : null}
            </React.Fragment>
        )
    }
}

export default App;
