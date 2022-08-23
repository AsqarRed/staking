import React from 'react';
import classes from "./block_data.module.css";

const Button2  = ({children, ...props}) => {
    return (
        <button {...props} className={classes.button2}>
            {children}
        </button>
    );
};

export default Button2;