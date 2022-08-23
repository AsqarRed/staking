import {WalletConnectConnector} from "@web3-react/walletconnect-connector";

const WalletConnect = new WalletConnectConnector({
    rpcUrl: `https://data-seed-prebsc-1-s1.binance.org:8545`,
    bridge: "https://bridge.walletconnect.org",
    qrcode: true,
});

export const connectors = {
    WalletConnect: WalletConnect,
};
