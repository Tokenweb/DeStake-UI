import React, { useEffect } from 'react';
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';

const web3Modal = new Web3Modal({
  providerOptions: {
    walletconnect: {
      package: WalletConnectProvider, // required
      options: {
        infuraId: process.env.REACT_APP_INFURA_ID, // required
      },
    },
  },
});

const Web3ModalComp = ({ onConnect, setWalletModal, showModal }) => {
  useEffect(() => {
    async function connect() {
      try {
        const provider = await web3Modal.connect();
        onConnect(provider);
      } catch (err) {
        console.error(err);
        setWalletModal(false);
      }
    }

    showModal && connect();
  }, [onConnect, setWalletModal, showModal]);
  return <div></div>;
};

export default Web3ModalComp;
