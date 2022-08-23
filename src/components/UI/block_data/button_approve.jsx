import React from 'react';
import classes from "./block_data.module.css";

const ButtonApprove  = ({children, ...props}) => {
    return (
        <button {...props} className={classes.button_approve}>
            {children}
        </button>
    );
};

export default ButtonApprove;