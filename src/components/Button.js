import React from "react";

function Button(props){
    return(
        <button id={props.id} className={props.classes}>{props.content}</button>
    )
}

export default Button;