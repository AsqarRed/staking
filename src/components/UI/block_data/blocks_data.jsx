import React from 'react';
import classes from "./block_data.module.css";
import BlockData from "./block_data";
import BlockData2 from "./block_data2";
import BlockData3 from "./block_data3";

const BlocksData = ({data, setConnect, setModalVisible, setModalStakeVisible, setModalInfoVisible}) => {
    return (
        <div className={classes.blocks_data}>
            <BlockData data={data} setConnect={setConnect} setModalVisible={setModalVisible} setModalStakeVisible={setModalStakeVisible} setModalInfoVisible={setModalInfoVisible}/>
            <BlockData2 setModalInfoVisible={setModalInfoVisible}/>
            <BlockData3 setModalInfoVisible={setModalInfoVisible}/>
        </div>
    );
};

export default BlocksData;