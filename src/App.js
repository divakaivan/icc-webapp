import React from 'react';
import Header from "./Components/Header";
import Form from "./Components/Form";
import University from "./Components/University";

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
            selectedUni: event[0].uni
        })
    }

    render() {
        return (
            <React.Fragment>
                <Header selectedUni={this.state.selectedUni} />
                <University handleChange={this.handleUniChange}/>
                {this.state.selectedUni ? <Form selectedUni={this.state.selectedUni}/> : null}
            </React.Fragment>
        )
    }
}

export default App;
