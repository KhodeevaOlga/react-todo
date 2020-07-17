import React from "react";

const Button = (props) => {
    const {onClick, nameButton} = props;
    return(
        <button onClick={onClick}>{nameButton}</button>
    )
}

export default Button