import React from 'react';
import imageSrc from '../../../images/logo.png'
import classes from './logo.module.css'

const Logo = () => {
    return (
        <img onClick={()=>window.location.href = "/"} className={classes.logo} src={imageSrc} alt={'Logo'}>

        </img>
    );
};

export default Logo;