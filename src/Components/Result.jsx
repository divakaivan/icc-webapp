import React from "react";
import ChatObj from "./ChatObj";

const Result = (props) => {

    return(
        <React.Fragment>
            {props.submitted && ChatObj[props.selectedUni].hasOwnProperty(props.userSearch)
                ? <div>{ChatObj[props.selectedUni][props.userSearch]}</div> : props.submitted && props.userSearch === '' ?
                <span
                    id="enter-major-warn">Please enter your major
                </span> : props.submitted && props.userSearch !== '' ?
                    'Currently there is no chat set up for your major' : null}
        </React.Fragment>
    )
};

export default Result;

