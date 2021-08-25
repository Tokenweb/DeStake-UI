import React from 'react';

const TokenActions = ({ balance }: { balance: string }) => {
  return (
    <div className='table-cell actions'>
      <div className='icon-button-container'>
        <button className='icon-button' onClick={() => {}}>
          <i className='material-icons'>send</i>
        </button>
        <span>Withdraw</span>
      </div>
      <div className='icon-button-container'>
        <button className='icon-button' onClick={() => {}}>
          <i className='material-icons'>arrow_upward</i>
        </button>
        <span>Stake</span>
      </div>
      <div className='icon-button-container'>
        <button className='icon-button' onClick={() => {}}>
          <i className='material-icons'>arrow_downward</i>
        </button>
        <span>Unstake</span>
      </div>
    </div>
  );
};

export default TokenActions;
