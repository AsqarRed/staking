import React from 'react';
import classes from "./block_data.module.css";
import imageSrc from "../../../images/q.png";
import Button1 from "./button1";
import Button2 from "./button2";
import ButtonConnectWallet from "./button_connect_wallet";
import ButtonApprove from "./button_approve";
import {connect, setApprove, getReward,withdraw} from "../../web3/web3_module";

const BlockData = ({data, setConnect, setModalVisible, setModalStakeVisible, setModalInfoVisible}) => {

    async function setApproveStart(){
        await setApprove(data.account);
        setConnect(await connect());
    }

    return (
        <div style={{'zIndex':1}}>
            <div className={classes.block_data_1}>
                <div className={classes.block_data_2}>
                    <div className={classes.block_data_3}>
                        <div className={classes.block_data_block_text}>
                            <div className={classes.block_data_block_text2}>
                                <div className={classes.block_data_text1}>Staking CEJI</div>
                                <div className={classes.block_data_text2}>Staking CEJI</div>
                            </div>
                            <img className={classes.block_data_q} src={imageSrc} alt={'q'} onClick={()=>setModalInfoVisible(1)}></img>
                        </div>
                        <div className={classes.block_data_data}>
                            <div className={classes.block_data_block2}>
                                <div>APR</div>
                                <div>{data.apr}</div>
                            </div>
                            <div className={classes.block_data_block2}>
                                <div className={classes.block_data_block3}>
                                    <div>Ceji Earned</div>
                                    <div>{data.earned}</div>
                                </div>
                                <Button1 onClick={()=>getReward(data.account)}>Harvest</Button1>
                            </div>
                            <div className={classes.block_data_block2}>
                                <div className={classes.block_data_block3}>
                                    <div>Ceji in Stake</div>
                                    <div>{data.stake}</div>
                                </div>
                                <Button1 onClick={()=>withdraw(data.account)}>Withdraw Dep</Button1>
                            </div>
                            <Button2 onClick={()=>setModalStakeVisible(true)}>Stake</Button2>
                            {!data.connect && <ButtonConnectWallet onClick={()=>setModalVisible(true)}>Connect Wallet</ButtonConnectWallet>}
                            {data.connect && !data.approve && <ButtonApprove onClick={()=>setApproveStart()}>Approve</ButtonApprove>}
                            </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default BlockData;