import React from 'react';
import classes from './footer.module.css'
import FooterMenuRow from "./footer_menu_row";
import MediaQuery from "react-responsive";

const FooterMenu = () => {
    const menu = [
        {id:1, header:'Contact', menuItems: [
                {id:1, text:'Main', src:'https://www.ceji.io/'},
                {id:2, text:'About', src:'https://www.ceji.io/#comp-l2y9h6a7'},
                {id:3, text:'OverView', src:'https://www.ceji.io/#comp-l2y9h38c'},
                {id:4, text:'EcoSystem', src:'https://www.ceji.io/#comp-l2ya4lt8'},
                {id:5, text:'Token', src:'https://www.ceji.io/#comp-l2ya4nxv'},
                {id:6, text:'Platform', src:'https://www.ceji.io/#comp-l2yb5ayz'},
                {id:7, text:'RoadMap', src:'https://www.ceji.io/#comp-l2ybxf1k'},
                {id:8, text:'Team', src:'https://www.ceji.io/#comp-l2ydt2k1'},
            ]},
        {id:2, header:'Docs', menuItems: [
                {id:1, text:'White Paper ( KR )', src:'https://www.ceji.io/_files/ugd/7e5c54_d27cfb6d01aa42cba55b1cee6b96b746.pdf'},
                {id:2, text:'White Paper ( EN )', src:'https://www.ceji.io/_files/ugd/7e5c54_5459d29a5cbb4c85853b1603a12e79ec.pdf'},
            ]},
        {id:3, header:'Contact Us', menuItems: [
                {id:1, text:'no1business@hanmail.net', src:'mailto:no1business@hanmail.net'},
                {id:2, text:'Twitter', src:'https://twitter.com/cejitoken'},
                {id:3, text:'Telegram', src:'https://t.me/cejitoken'},
                {id:4, text:'Kakao', src:'https://open.kakao.com/o/gNTghwfe'},
                {id:5, text:'Cafe', src:'https://cafe.naver.com/chu2byo'},
            ]}
    ]
    return (
        <div>
            <MediaQuery minWidth={750}>
                <div className={classes.footer_menu_block}>
                    {menu.map((menuItem) =>
                        <FooterMenuRow menu={menuItem} key={menuItem.id}/>
                    )}
                </div>
            </MediaQuery>
            <MediaQuery maxWidth={750}>
                <div className={classes.footer_menu_block_mobile}>
                    {menu.map((menuItem) =>
                        <FooterMenuRow menu={menuItem} key={menuItem.id}/>
                    )}
                </div>
            </MediaQuery>
        </div>
    );
};

export default FooterMenu;