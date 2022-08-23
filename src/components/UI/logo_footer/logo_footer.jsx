import React from 'react';
import imageSrc from '../../../images/logo.png'
import classes from './logo_footer.module.css'

const Logo_footer = () => {
    return (
        <img className={classes.logo_footer} src={imageSrc} alt={'Logo_footer'}>

        </img>
    );
};

export default Logo_footer;