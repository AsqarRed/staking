import React from 'react';
import classes from "./block_data.module.css";
import imageSrc from "../../../images/q.png";
import Button1 from "./button1";
import Button2 from "./button2";

const BlockData3 = ({setModalInfoVisible}) => {
    return (
        <div className={classes.block_data_1}>
            <div className={classes.block_data_2}>
                <div className={classes.block_data_3}>
                    <div className={classes.block_data_block_text_2}>
                        <div className={classes.block_data_block_text2}>
                            <div className={classes.block_data_text1}>Farming CEJI NFTs</div>
                            <div className={classes.block_data_text2}>Farming CEJI NFTs</div>
                        </div>
                        <img className={classes.block_data_q} src={imageSrc} alt={'q'} onClick={()=>setModalInfoVisible(3)}></img>
                    </div>
                    <div className={classes.block_data_data}>
                        <div className={classes.block_data_block2}>
                            <div>Rate</div>
                            <div>-</div>
                        </div>
                        <div className={classes.block_data_block2}>
                            <div className={classes.block_data_block3}>
                                <div>Available CEJI</div>
                                <div>0</div>
                            </div>
                            <Button1>Buy Ceji</Button1>
                        </div>
                        <div className={classes.block_data_block2}>
                            <div className={classes.block_data_block3}>
                                <div>Ceji in Stake</div>
                                <div>-</div>
                            </div>
                            <Button1>Claim</Button1>
                        </div>
                        <Button2>SOON...</Button2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlockData3;