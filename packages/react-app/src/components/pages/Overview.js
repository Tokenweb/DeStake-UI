import React, { useContext } from 'react';
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

const Overview = () => {
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
        </div>
      )}
    </AppPage>
  );
};

export default Overview;
