import React, { useEffect } from "react";
import Web3Modal from "web3modal";



const Web3ModalComp = ({onConnect}) => {
  const web3Modal = new Web3Modal({});
  useEffect(() => {
    const connect = async () => {
      const provider = await web3Modal.connect();
      onConnect(provider)
    }
    connect()
  }, [])
  return <div></div>;
}

export default Web3ModalComp


