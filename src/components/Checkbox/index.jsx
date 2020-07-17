import React from "react";

const Checkbox = (props) => {
    const { onChange, checked, className } = props;

    return <input type="checkbox" className={className} checked={checked} onChange={onChange} />;
};

export default Checkbox;