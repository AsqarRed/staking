import React from 'react';
import classes from "./block_data.module.css";

const ButtonConnectWallet = ({children, ...props}) => {
    return (
        <button {...props} className={classes.button_connect_wallet}>
            {children}
        </button>
    );
};

export default ButtonConnectWallet;