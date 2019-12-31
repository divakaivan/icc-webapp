import React from "react";
import ChatObj from "./ChatObj";
import "../Stylesheets/result.css";

const Result = (props) => {
    const {submitted, userSearch, selectedUni} = props;
    return (
        <React.Fragment>
            {submitted && ChatObj[selectedUni].hasOwnProperty(userSearch)
                ?
                <a className="result">{ChatObj[selectedUni][userSearch]}</a> : submitted && userSearch === '' ?
                    <span
                        id="enter-major-warn">Please enter your major
                </span> : submitted && userSearch !== '' ?
                        'Currently there is no chat set up for your major' : null}
        </React.Fragment>
    )
};

export default Result;

