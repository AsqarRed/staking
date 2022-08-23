import React from 'react';
import classes from "./block_data.module.css";
import imageSrc from "../../../images/q.png";
import Button1 from "./button1";
import Button2 from "./button2";
import ButtonConnectWallet from "./button_connect_wallet";

const BlockData2 = ({setModalInfoVisible}) => {
    return (
        <div className={classes.block_data_1}>
            <div className={classes.block_data_2}>
                <div className={classes.block_data_3}>
                    <div className={classes.block_data_block_text_2}>
                        <div className={classes.block_data_block_text2}>
                            <div className={classes.block_data_text1}>Farming LP tokens</div>
                            <div className={classes.block_data_text2}>Farming LP tokens</div>
                        </div>
                        <img className={classes.block_data_q} src={imageSrc} alt={'q'} onClick={()=>setModalInfoVisible(2)}></img>
                    </div>
                    <div className={classes.block_data_data}>
                        <div className={classes.block_data_block2}>
                            <div>APR</div>
                            <div>-</div>
                        </div>
                        <div className={classes.block_data_block2}>
                            <div>Reward</div>
                            <div>CEJI</div>
                        </div>
                        <div className={classes.block_data_block2}>
                            <div className={classes.block_data_block3}>
                                <div>Ceji Earned</div>
                                <div>-</div>
                            </div>
                            <Button1>Harvest</Button1>
                        </div>
                        <div className={classes.block_data_block2}>
                            <div className={classes.block_data_block3}>
                                <div>LP token in stake</div>
                                <div>-</div>
                            </div>
                            <Button1>Withdraw Dep</Button1>
                        </div>
                        <Button2>SOON...</Button2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlockData2;