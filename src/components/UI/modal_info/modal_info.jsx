import React from 'react';
import classes from "../modal_info/modal_info.module.css";
import imageSrc_exit from "../../../images/close.png";

const ModalInfo = ({active, setVisible}) => {
    const rootClasses = [classes.modal_block];
    const text = ['',
        'Your deposit will be locked for 45 days. However, the rewards will always be available for withdrawal',
        'This service will be available soon.',
        'This service will be available soon.']

    if(active){
        rootClasses.push(classes.modal_block_active);
    }
    return (
        <div onClick={()=>setVisible(false)} className={rootClasses.join(' ')}>
            <div onClick={(e)=>e.stopPropagation()} className={classes.modal_block_content_mobile}>
                <div className={classes.modal_block_header_block_mobile}>
                    <div className={classes.modal_block_header_mobile}>Info</div>
                    <img onClick={()=>setVisible(false)} className={classes.modal_block_exit_mobile} src={imageSrc_exit} alt={'exit'}></img>
                </div>
                <div className={classes.modal_block_block_4_mobile}>
                    {text[active]}
                </div>
            </div>
        </div>

    );
};

export default ModalInfo;