import React from 'react';
import classes from "./header.module.css";
import imageSrc_exit from "../../../images/close.png"

const MenuMobile = ({isActive, setVisible}) => {
    const rootClasses = [classes.header_menu_mobile]
    if(isActive){
        rootClasses.push(classes.header_menu_mobile_active);
    }
    return (
        <div onClick={()=>setVisible(false)} className={rootClasses.join(' ')}>
            <div onClick={(e)=>e.stopPropagation()} className={classes.header_menu_mobile_block}>
                <img src={imageSrc_exit} alt={'close'} className={classes.header_mobile_close} onClick={()=>setVisible(false)}/>
                <a className={classes.header_menu_mobile_block_href} href={'https://www.ceji.io/'}>Main</a>
                <a className={classes.header_menu_mobile_block_href} href={'https://www.ceji.io/#comp-l2y9h6a7'}>About</a>
                <a className={classes.header_menu_mobile_block_href} href={'https://www.ceji.io/#comp-l2y9h38c'}>OverView</a>
                <a className={classes.header_menu_mobile_block_href} href={'https://www.ceji.io/#comp-l2ya4nxv'}>Token</a>
                <a className={classes.header_menu_mobile_block_href} href={'/'}>Finance</a>
                <a className={classes.header_menu_mobile_block_href} href={'https://www.ceji.io/#comp-l2yb5ayz'}>Platform</a>
                <a className={classes.header_menu_mobile_block_href} href={'https://www.ceji.io/#comp-l2ybxf1k'}>RoadMap</a>
                <a className={classes.header_menu_mobile_block_href} href={'https://www.ceji.io/#comp-l2ydt2k1'}>Team</a>
            </div>
        </div>
    );
};

export default MenuMobile;