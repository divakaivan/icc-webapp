import React from 'react';
import './App.css';
import Header from "./Components/Header";
import Form from "./Components/Form";

class App extends React.Component {

  render() {
    return(
        <React.Fragment>
            <Header/>
            <Form/>
        </React.Fragment>
    )
  }
}

export default App;
