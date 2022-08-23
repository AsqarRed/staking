import React from 'react';
import classes from './header.module.css'

const HeaderMenuItem = ({children, active, ...props}) => {
    const rootClasses = [classes.header_menu_item];
    if(active){
        rootClasses.push(classes.header_menu_item_active);
    }
    return (
        <a {...props} className={rootClasses.join(' ')}>
            {children}
        </a>
    );
};

export default HeaderMenuItem;