import React from 'react';
import classes from "./footer.module.css";
import MediaQuery from "react-responsive";

const FooterMenuItem = ({item}) => {
    return (
        <div>
            <MediaQuery minWidth={750}>
                <a className={classes.footer_menu_item} href={item.src}>
                    {item.text}
                </a>
            </MediaQuery>
            <MediaQuery maxWidth={750}>
                <a className={classes.footer_menu_item_mobile} href={item.src}>
                    {item.text}
                </a>
            </MediaQuery>
        </div>
    );
};

export default FooterMenuItem;