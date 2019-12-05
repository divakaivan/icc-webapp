import React from 'react';
import './App.css';
import {Col, Row} from "react-bootstrap";
import Header from "./Components/Header";
import Form from "./Components/Form";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

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
