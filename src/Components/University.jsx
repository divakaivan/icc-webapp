import React from "react";
import "../Stylesheets/university.css";
import Select from "react-dropdown-select";
import H3Header from "./H3Header";
import ChatObj from "./ChatObj";

const listOfUnis = [];
let x;
for (x in ChatObj) {
    listOfUnis.push({"uni": x})
}

class University extends React.Component {

    render() {
        return(
            <div className="university">
                <H3Header text={"Step 1: Choose your university"}/>
                <Select valueField={"uni"}
                        labelField={"uni"}
                        onChange={this.props.handleChange}
                        searchable={false}
                        options={listOfUnis}
                />
            </div>
        )
    }
}

export default University;