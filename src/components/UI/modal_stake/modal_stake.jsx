import React, {useState} from 'react';
import MediaQuery from "react-responsive";
import classes from "../modal_stake/modal_stake.module.css";
import imageSrc_exit from "../../../images/close.png";
import {stake} from "../../web3/web3_module";

const ModalStake = ({data, active, setVisible}) => {
    const rootClasses = [classes.modal_block];
    const [valueSwap, setValueSwap] = useState('')

    if(active){
        rootClasses.push(classes.modal_block_active);
    }

    function close(){
        setValueSwap('');
        setVisible(false);
    }

    async function startStake(){
        await stake(data.account,valueSwap);
        close();
    }

    return (
        <div onClick={()=>close()} className={rootClasses.join(' ')}>
            <MediaQuery minWidth={1115}>
                <div onClick={(e)=>e.stopPropagation()} className={classes.modal_block_content}>
                    <div className={classes.modal_block_block_3}>
                        <div className={classes.modal_block_header}>Stake</div>
                        <img onClick={()=>close()} className={classes.modal_block_exit} src={imageSrc_exit} alt={'exit'}></img>
                    </div>
                    <div className={classes.modal_block_block_2}>
                        <div className={classes.modal_block_input_block}>
                            <input value={valueSwap} onChange={e => setValueSwap(e.target.value)} placeholder={0} className={classes.modal_block_input}></input>
                            <div className={classes.modal_block_input_Ceji}>Ceji</div>
                        </div>
                        <div className={classes.modal_block_button_block}>
                            <button onClick={()=>close()} className={classes.modal_block_button}>Cancel</button>
                            <button onClick={()=>startStake()} className={classes.modal_block_button_confirm}>Confirm</button>
                        </div>
                    </div>
                </div>
            </MediaQuery>
            <MediaQuery maxWidth={1114}>
                <div onClick={(e)=>e.stopPropagation()} className={classes.modal_block_content_mobile}>
                    <div className={classes.modal_block_header_block_mobile}>
                        <div className={classes.modal_block_header_mobile}>Stake</div>
                        <img onClick={()=>close()} className={classes.modal_block_exit_mobile} src={imageSrc_exit} alt={'exit'}></img>
                    </div>
                    <div className={classes.modal_block_block_4_mobile}>
                        <div className={classes.modal_block_input_block}>
                            <input value={valueSwap} onChange={e => setValueSwap(e.target.value)} placeholder={0} className={classes.modal_block_input_mobile}></input>
                            <div className={classes.modal_block_input_Ceji_mobile}>Ceji</div>
                        </div>
                        <div className={classes.modal_block_button_block_mobile}>
                            <button onClick={()=>close()} className={classes.modal_block_button_mobile}>Cancel</button>
                            <button onClick={()=>startStake()} className={classes.modal_block_button_confirm_mobile}>Confirm</button>
                        </div>
                    </div>
                </div>
            </MediaQuery>

        </div>
    );
};

export default ModalStake;