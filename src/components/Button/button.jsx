import React from "react";

const Button = (props) => {
    const {onClick, nameButton, className} = props;
    return(
        <button
            className={className}
            onClick={onClick}>
            {nameButton}
        </button>
    )
}

export default Button