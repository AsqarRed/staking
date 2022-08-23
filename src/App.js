import React, {useEffect, useState} from "react";
import './components/styles/App.css';
import Block1 from "./components/UI/block1/block1";
import Footer from "./components/UI/footer/footer";
import Header from "./components/UI/header/header";
import Modal from "./components/UI/modal/modal";
import BlocksData from "./components/UI/block_data/blocks_data";
import MediaQuery from "react-responsive";
import ModalStake from "./components/UI/modal_stake/modal_stake";
import {setCookie} from "./components/fun_cookie";
import { useWeb3React } from '@web3-react/core'
import ModalInfo from "./components/UI/modal_info/modal_info";

import WalletConnectProvider from "@walletconnect/web3-provider";

const provider = new WalletConnectProvider({
    infuraId: "27e484dcd9e3efcfd25a83a78777cdf1",
});

function start(){
    console.log(provider)
}

function App() {
    //const { active, chainId, account, library, deactivate } = useWeb3React();


    const [modalActive, setModalActive] = useState(false);
    const [modalStakeActive, setModalStakeActive] = useState(false);
    const [modalInfoActive, setModalInfoActive] = useState(0);
    const [data, setData] = useState({
        connect:false,
        account:'',
        earned:'-',
        stake:'-',
        approve:false,
        apr:'-'
    });

    function setConnect(data){
        setData(data);
        setCookie('connect',true);
    }



    /*useEffect(()=>
        connectors.WalletConnect.on("accountsChanged", (accounts) => {
            console.log('ACCOUNTS CHANGED' + accounts[0]);
        })
    )
*/
   /* useEffect(()=>{
        window.ethereum.on('chainChanged', (chainId) => {
            setNetwork();
        });
    })*/

    return (
        <div className="App">
            <button onClick={()=>start()}>Start</button>
            <Header/>
            <MediaQuery minWidth={1115}>
                <Block1/>
            </MediaQuery>
            <BlocksData data={data} setConnect={setConnect} setModalVisible={setModalActive} setModalStakeVisible={setModalStakeActive} setModalInfoVisible={setModalInfoActive}/>
            <Footer />
            <Modal setConnect={setConnect} isActive={modalActive} setVisible={setModalActive}/>
            <ModalStake data={data} active={modalStakeActive} setVisible={setModalStakeActive}/>
            <ModalInfo active={modalInfoActive} setVisible={setModalInfoActive}/>
        </div>
    );
}

export default App;
