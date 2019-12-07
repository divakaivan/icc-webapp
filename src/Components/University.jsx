import React from "react";
import "../Stylesheets/university.css";

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
                    <select className="dropdown" name="university" onChange={this.props.handleChange}>
                        <option selected disabled>Choose your university</option>
                        {listOfUnis.sort((a, b) => (a.uni > b.uni) ? 1 : -1).map((item) => {
                            return <option value={item.uni} key={item.uni}>{item.uni}</option>
                        })}
                    </select>
            </div>
        )
    }
}

export default University;