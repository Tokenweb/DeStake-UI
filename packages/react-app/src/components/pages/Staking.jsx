import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router';
import AppPage from '../common/AppPage';
import { WalletContext } from '../providers/WalletProvider';

const overviewStyles = {
  margin: 'auto',
  height: '60vh',
  width: '80vw',
  borderRadius: '10px',
  padding: '15px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const flexStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const stakeContainerStyles = {
  width: '60%',
  minHeight: '400px',
  padding: 10,
  marginTop: 30,
};

const stakeBodyContainerStyles = {
  boxShadow: '0 0 1rem rgba(0, 0, 0, .1)',
  padding: 10,
  flex: 1,
  margin: '30px 0',
  borderRadius: '10px',
  height: '70%',
};

const tabStyle = {
  padding: 10,
  minWidth: '50px',
  textAlign: 'center',
  textTransform: 'uppercase',
  borderRadius: '5px',
  cursor: 'pointer',
};

const stakeFormContainerStyle = {
  ...flexStyle,
  justifyContent: 'space-between',
  marginBottom: '10px',
};
const stakeFormInputStyle = {
  border: 'none',
  fontSize: '16px',
  borderBottom: '1px solid black',
  padding: 15,
  textAlign: 'right',
  outline: 'none',
  '-webkit-appearance': 'none',
  margin: 0,
  '-moz-appearance': 'textfield',
  flex: 0.8,
};
const stakeFormSubmitStyle = {
  width: '100%',
  padding: '10px',
  textAlign: 'center',
  textTransform: 'uppercase',
  background: 'black',
  color: 'white',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '18px',
  border: 'none',
};
const stakeFormBadgeStyle = {
  padding: 10,
  background: 'black',
  color: 'white',
  fontWeight: 'bold',
  borderRadius: '20px',
  minWidth: '150px',
  minHeight: '50px',
  ...flexStyle,
};

const StakeBar = ({ stakePool, totalDeposits }) => {
  const stakeBarStyles = {
    padding: '10px',
    boxShadow: '0 0 1rem rbga(0, 0, 0, .5)',
    flexDirection: 'column',
    ...flexStyle,
  };
  return (
    <div style={stakeBarStyles}>
      <div style={flexStyle}>
        <h3>{stakePool}</h3>
      </div>
      <p>Total deposits: {totalDeposits} $</p>
    </div>
  );
};

// TODO balance
const useBalance = (mode) => ({
  balance: mode === 'stake' ? 10 : 20,
  isFetching: false,
});

const StakeForm = ({ mode }) => {
  const [value, setValue] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const { balance, isFetching } = useBalance(mode);

  return (
    <div
      style={{
        padding: '5%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <div>
        <div style={stakeFormContainerStyle}>
          <div style={stakeFormBadgeStyle}>
            {mode === 'stake' ? 'GRT' : 'sGRT'}
          </div>
          <input
            style={stakeFormInputStyle}
            type='number'
            name='value'
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <p style={{ cursor: 'pointer' }} onClick={() => setValue(balance)}>
          Balance: {balance} {mode === 'stake' ? 'GRT' : 'sGRT'}
        </p>
      </div>
      <button
        disbaled={value.length === 0}
        onClick={async () => {
          setIsProcessing(true);
          setTimeout(() => {
            alert(
              `${mode === 'stake' ? 'Staking' : 'Unstaking'} done successfully`
            );
            setIsProcessing(false);
          }, 2000);
        }}
        style={{
          ...stakeFormSubmitStyle,
          cursor: value.length === 0 ? 'not-allowed' : 'pointer',
        }}
      >
        {isProcessing
          ? 'Processing ...'
          : mode === 'stake'
          ? 'stake'
          : 'unstake'}
      </button>
    </div>
  );
};

const Staking = () => {
  const { address } = useContext(WalletContext);
  const [mode, setMode] = useState('stake');

  return (
    <AppPage loading={false}>
      {!address ? (
        <Redirect to='/' />
      ) : (
        <div style={overviewStyles}>
          <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>
            Stake/Unstake your GRT
          </h1>
          <div style={stakeContainerStyles}>
            <div
              style={{
                ...flexStyle,
                width: '100%',
                justifyContent: 'space-between',
                padding: '0 20%',
              }}
            >
              <span
                style={{
                  ...tabStyle,
                  background: mode === 'unstake' ? 'grey' : 'black',
                  color: mode === 'unstake' ? 'white' : 'white',
                }}
                onClick={() => setMode('stake')}
              >
                Stake
              </span>
              <span
                style={{
                  ...tabStyle,
                  background: mode === 'stake' ? 'grey' : 'black',
                  color: mode === 'stake' ? 'white' : 'white',
                }}
                onClick={() => setMode('unstake')}
              >
                Unstake
              </span>
            </div>
            <div style={stakeBodyContainerStyles}>
              <StakeForm mode={mode} />
            </div>
          </div>
        </div>
      )}
    </AppPage>
  );
};

export default Staking;
