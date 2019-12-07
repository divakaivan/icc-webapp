import React from "react";
import "../Stylesheets/university.css";

class University extends React.Component {

    render() {
        return(
            <div className="university">
                <form>Choose your university:
                    <select className="dropdown" name="university" onChange={this.props.handleChange}>
                        <option selected disabled hidden>Choose your university</option>
                        <option value="University of Essex">University of Essex</option>
                        <option value="University of Manchester">University of Manchester</option>
                        <option value="University College London">University College London</option>
                        <option value="Loughborough University">Loughborough University</option>
                    </select>
                </form>
            </div>
        )
    }
}

export default University;