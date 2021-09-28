import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
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

const buttonStyle = {
  padding: 10,
  minWidth: '50px',
  textAlign: 'center',
  textTransform: 'uppercase',
  borderRadius: '5px',
  cursor: 'pointer',
  background: 'black',
  color: 'white',
  margin: '10px 0',
};

const Overview = ({ history }) => {
  const { address } = useContext(WalletContext);

  return (
    <AppPage loading={false}>
      {!address ? (
        <div>Please connect your wallet</div>
      ) : (
        <div style={overviewStyles}>
          <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>
            Welcome {address}
          </h1>
          <p style={{ marginTop: '10px', fontSize: '18px' }}>
            Total Staked: 123 GRT
          </p>
          <p style={{ marginTop: '10px', fontSize: '18px' }}>
            GRT Balance: 110 GRT
          </p>
          <p style={{ marginTop: '10px', fontSize: '18px' }}>
            sGRT Balance: 150 sGRT
          </p>
          <button style={buttonStyle} onClick={() => history.push('/staking')}>
            Stake/Unstake
          </button>
        </div>
      )}
    </AppPage>
  );
};

export default withRouter(Overview);
