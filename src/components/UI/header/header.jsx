import React, {useState} from 'react';
import classes from './header.module.css'
import Logo from "../logo/logo";
import HeaderMenuItem from "./header_menu_item";
import MediaQuery from "react-responsive";
import srcBurger from '../../../images/burger.png'
import srcLogo2 from '../../../images/logo2.png'
import MenuMobile from "./menu_mobile";

const Header = () => {
    const [isActive, setVisible] = useState(false);

    return (
        <div>
            <MediaQuery minWidth={1115}>
                <div className={classes.header}>
                    <HeaderMenuItem href={'https://www.ceji.io/'}>Main</HeaderMenuItem>
                    <HeaderMenuItem href={'https://www.ceji.io/#comp-l2y9h6a7'}>About</HeaderMenuItem>
                    <HeaderMenuItem href={'https://www.ceji.io/#comp-l2y9h38c'}>OverView</HeaderMenuItem>
                    <HeaderMenuItem href={'https://www.ceji.io/#comp-l2ya4nxv'}>Token</HeaderMenuItem>
                    <Logo/>
                    <HeaderMenuItem active={true}>Finance</HeaderMenuItem>
                    <HeaderMenuItem href={'https://www.ceji.io/#comp-l2yb5ayz'}>Platform</HeaderMenuItem>
                    <HeaderMenuItem href={'https://www.ceji.io/#comp-l2ybxf1k'}>RoadMap</HeaderMenuItem>
                    <HeaderMenuItem href={'https://www.ceji.io/#comp-l2ydt2k1'}>Team</HeaderMenuItem>
                </div>
            </MediaQuery>
            <MediaQuery maxWidth={1114}>
                <div className={classes.header}>
                    <div className={classes.header_block2_mobile}>
                        <div className={classes.header_block1_mobile}>
                            <img className={classes.header_burger} src={srcBurger} alt={'burger'} onClick={()=>setVisible(true)}></img>
                            <Logo/>
                        </div>
                        <img onClick={()=>window.location.href = "/"} src={srcLogo2} alt={'logo'}></img>
                    </div>
                </div>
                <MenuMobile isActive={isActive} setVisible={setVisible}></MenuMobile>
            </MediaQuery>
        </div>
    );
};

export default Header;