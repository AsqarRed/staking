import React, {useState} from 'react';
import classes from "./modal.module.css";
import imageSrc_metamask from "../../../images/metamask.png";
import imageSrc_walletConnect from "../../../images/walletConnect.png"
import imageSrc_exit from "../../../images/exit.png"
import MediaQuery from "react-responsive";
import {connect, connect_wallet_connect} from "../../web3/web3_module";
import {getCookie, setCookie} from "../../fun_cookie";
import {connectors} from "../../connects"
import { useWeb3React } from '@web3-react/core'

const Modal = ({setConnect, isActive, setVisible}) => {
    const {account, activate, active } = useWeb3React();

    const rootClasses = [classes.modal_block];
    const rootClassesMetamask = [classes.modal_block_metamask];
    const rootClassesMetamaskImg = [classes.modal_block_img];
    const rootClassesWalletConnect = [classes.modal_block_walletConnect];
    const rootClassesWalletConnectImg = [classes.modal_block_img];

    if(isActive){
        rootClasses.push(classes.modal_block_active);
    }

    const [activeMode, setActiveMode] = useState(0)


    switch (activeMode){
        case 1: rootClassesMetamask.push(classes.modal_block_metamask_active);
            rootClassesMetamaskImg.push(classes.modal_block_metamask_img_active);
            setCookie('activeMode',1);
        break;
        case 2: rootClassesWalletConnect.push(classes.modal_block_walletConnect_active);
            rootClassesWalletConnectImg.push(classes.modal_block_walletConnect_img_active);
            setCookie('activeMode',2);
            break;
        default : break;
    }

    async function startWalletConnect(){
        //await activate(connectors.WalletConnect);
        //console.log(account);
        //await connect_wallet_connect();
        setConnect(await connect_wallet_connect());
    }

    async function startLogin(){
        switch (parseInt(getCookie('activeMode'))){
            case 1: setConnect(await connect()); break;
            case 2: await startWalletConnect(); break;
            default: break;
        }
        setVisible(false);
    }

    window.onload = async function(){
        if(!active){
            setCookie('connect',false);
        }
        if(getCookie('connect') == 'true'){
            await startLogin();
        }

    }

    return (
        <div onClick={()=>{setVisible(false); setActiveMode(0)}} className={rootClasses.join(' ')}>
            <MediaQuery minWidth={1115}>
                <div onClick={(e)=>e.stopPropagation()} className={classes.modal_block_content}>
                    <div className={classes.modal_block_block_3}>
                        <div className={classes.modal_block_header}>Track Wallet</div>
                        <img onClick={()=>{setVisible(false); setActiveMode(0)}} className={classes.modal_block_exit} src={imageSrc_exit} alt={'exit'}></img>
                    </div>
                    <div className={classes.modal_block_block_2}>
                        <div className={classes.modal_block_block_1}>
                            <button className={rootClassesMetamask.join(' ')} onClick={()=>setActiveMode(1)}>
                                <img className={rootClassesMetamaskImg.join(' ')} src={imageSrc_metamask} alt={'metamask'}></img>
                                <div className={classes.modal_block_button_text}>Metamask</div>
                            </button>
                            <button className={rootClassesWalletConnect.join(' ')} onClick={()=>setActiveMode(2)}>
                                <img className={rootClassesWalletConnectImg.join(' ')} src={imageSrc_walletConnect} alt={'walletConnect'}></img>
                                <div className={classes.modal_block_button_text}>WalletConnect</div>
                            </button>
                        </div>
                        <button onClick={()=>startLogin()} className={classes.modal_block_button}>Connect</button>
                    </div>
                </div>
            </MediaQuery>
            <MediaQuery maxWidth={1114}>
                <div onClick={(e)=>e.stopPropagation()} className={classes.modal_block_content_mobile}>
                    <div className={classes.modal_block_header_block_mobile}>
                        <div className={classes.modal_block_header_mobile}>Track Wallet</div>
                        <img onClick={()=>{setVisible(false); setActiveMode(0)}} className={classes.modal_block_exit_mobile} src={imageSrc_exit} alt={'exit'}></img>
                    </div>
                    <div className={classes.modal_block_block_4_mobile}>
                        <button className={rootClassesMetamask.join(' ')} onClick={()=>setActiveMode(1)} style={{'width':264}}>
                            <img className={rootClassesMetamaskImg.join(' ')} src={imageSrc_metamask} alt={'metamask'}></img>
                            <div className={classes.modal_block_button_text}>Metamask</div>
                        </button>
                        <button className={rootClassesWalletConnect.join(' ')} onClick={()=>setActiveMode(2)} style={{'width':264}}>
                            <img className={rootClassesWalletConnectImg.join(' ')} src={imageSrc_walletConnect} alt={'walletConnect'}></img>
                            <div className={classes.modal_block_button_text}>WalletConnect</div>
                        </button>
                        <button onClick={()=>startLogin()}  className={classes.modal_block_button_mobile}>Connect</button>
                    </div>
                </div>
            </MediaQuery>

        </div>
    );
};

export default Modal;