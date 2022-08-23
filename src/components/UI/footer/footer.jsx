import React from 'react';
import classes from "./footer.module.css";
import LogoFooter from "../logo_footer/logo_footer";
import FooterMenu from "./footer_menu";
import MediaQuery from "react-responsive";

const Footer = () => {
    return (
        <div>
            <MediaQuery minWidth={1115}>
                <div className={classes.footer}>
                    <div >
                        <LogoFooter/>
                        <div className={classes.footer_tel}>Tel. 070-7797-7435</div>
                    </div>
                    <FooterMenu/>
                </div>
            </MediaQuery>
            <MediaQuery maxWidth={1115}>
                <div className={classes.footer_mobile}>
                    <div className={classes.footer_block1_mobile}>
                        <LogoFooter/>
                        <div className={classes.footer_tel_mobile}>Tel. 070-7797-7435</div>
                    </div>
                    <FooterMenu/>
                </div>
            </MediaQuery>
        </div>

    );
};

export default Footer;