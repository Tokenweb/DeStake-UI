import React, { useEffect } from 'react';
import Web3Modal from 'web3modal';

const web3Modal = new Web3Modal({});

const Web3ModalComp = ({ onConnect }) => {
  useEffect(() => {
    const connect = async () => {
      const provider = await web3Modal.connect();
      onConnect(provider);
    };
    connect();
  }, [onConnect]);
  return <div></div>;
};

export default Web3ModalComp;
