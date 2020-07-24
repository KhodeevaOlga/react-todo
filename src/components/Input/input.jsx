import React from "react";

const Input = (props) => {

        const {enter, value, handler, className, getBlur} = props;
        // const [list, setList] = React.useState([1, 2, 3]) //0: active, 1: completed
        //
        // const addToList = () => {
        //         setList([...list, 4])
        // }


        return(
                <input
                    className={className}
                    onKeyDown={enter}
                    placeholder='Add todo'
                    value={value}
                    onChange={(event) => handler(event)}
                    onBlur={getBlur}
                />
        )
}

export default Input;
