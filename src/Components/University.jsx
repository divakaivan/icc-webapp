import React from "react";
import "../Stylesheets/university.css";
import Select from "react-dropdown-select";
import H3Header from "./H3Header";


const listOfUnis = [
    {
        uni: "University of Essex"
    },
    {
        uni: "Oxford University"
    },
    {
        uni: "University of Cambridge"
    },
    {
        uni: "London School of Economics"
    },
    {
        uni: "Imperial College London"
    },
    {
        uni: "University of Manchester"
    },
    {
        uni: "University of Edinburgh"
    },
    {
        uni: "University of Leeds"
    },
    {
        uni: "University of Nottingham"
    },
    {
        uni: "University of Sheffield"
    },
    {
        uni: "University of Warwick"
    },
    {
        uni: "University of Bristol"
    }
];

class University extends React.Component {

    render() {
        return(
            <div className="university">
                <H3Header text={"Step 1: Choose your university"}/>
                <Select valueField={"uni"}
                        labelField={"uni"}
                        onChange={this.props.handleChange}
                        searchBy="uni"
                        options={listOfUnis}
                />
            </div>
        )
    }
}

export default University;