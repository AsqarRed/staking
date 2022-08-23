import React from 'react';
import classes from "./footer.module.css";
import FooterMenuItem from "./footer_menu_item";
import MediaQuery from "react-responsive";

const FooterMenuRow = ({menu}) => {
    return (
        <div>
            <MediaQuery minWidth={750}>
                <div className={classes.footer_menu}>
                    <div className={classes.footer_menu_header_text}>{menu.header}</div>
                    {menu.menuItems.map((item) =>
                        <FooterMenuItem item={item} key={item.id}/>
                    )}
                </div>
            </MediaQuery>
            <MediaQuery maxWidth={750}>
                <div className={classes.footer_menu}>
                    <div className={classes.footer_menu_header_text}>{menu.header}</div>
                    <div className={classes.footer_menu_header_block_mobile}>
                        {menu.menuItems.map((item) =>
                            <FooterMenuItem item={item} key={item.id}/>
                        )}
                    </div>
                </div>
            </MediaQuery>
        </div>
    );
};

export default FooterMenuRow;