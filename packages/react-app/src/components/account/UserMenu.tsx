import React, { useState, useContext } from 'react';
import { WalletContext } from '../providers/WalletProvider';
import UserMenuAddress from './UserMenuAddress';
import Avatar from '../common/Avatar';
import Web3Modal from './Web3Modal';
import './UserMenu.scoped.css';

const buttonStyles: React.CSSProperties = {
  padding: '10px',
  borderRadius: '5px',
  background: 'black',
  color: 'white',
  textAlign: 'center',
  fontSize: '16px',
  cursor: 'pointer',
};

const UserMenu: React.FC<{
  user?: any;
  sessionType?: any;
  ledgerAddressError?: any;
}> = ({ user, sessionType }) => {
  const [showModal, setShowModal] = useState(false);
  const { setWallet, address } = useContext(WalletContext) as any;

  const onConnect = (provider: any) => {
    setWallet({
      walletType: 'METAMASK',
      wallet: provider,
      address: provider.selectedAddress,
      provider,
      GRTInstance: null,
    });
  };

  return (
    <div className='user-menu' onClick={() => setShowModal(true)}>
      {address ? (
        <UserMenuAddress address={address} sessionType={sessionType} />
      ) : (
        <button style={buttonStyles}>Sign In</button>
      )}
      {/* <Link
        to='/notifications'
        className='user-menu-icon-container notifications'
      >
        <MdNotifications className='material-icons' />
      </Link> */}
      {user && (
        <div className='avatar-container'>
          <span className='user-menu-icon-container tooltip-target'>
            <i className='material-icons'>person</i>
          </span>

          <Avatar
            alt=''
            className='avatar tooltip-target'
            address={user ? user.email : ''}
            human={true}
          />
        </div>
      )}
      <Web3Modal
        showModal={showModal}
        onConnect={onConnect}
        setWalletModal={setShowModal}
      />
    </div>
  );
};

export default UserMenu;
