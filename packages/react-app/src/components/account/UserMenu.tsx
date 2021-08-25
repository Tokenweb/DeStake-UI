import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { MdNotifications } from 'react-icons/md';
import { WalletContext } from '../providers/WalletProvider';
import UserMenuAddress from './UserMenuAddress';
import Avatar from '../common/Avatar';
import Web3Modal from './Web3Modal';
import './UserMenu.scoped.css';

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
        <div>Sign In</div>
      )}
      <Link
        to='/notifications'
        className='user-menu-icon-container notifications'
      >
        <MdNotifications className='material-icons' />
      </Link>
      <div className='avatar-container'>
        {user && (
          <span className='user-menu-icon-container tooltip-target'>
            <i className='material-icons'>person</i>
          </span>
        )}
        {user && (
          <Avatar
            alt=''
            className='avatar tooltip-target'
            address={user ? user.email : ''}
            human={true}
          />
        )}
      </div>
      {showModal ? (
        <Web3Modal onConnect={onConnect} /> // <Modal content={<ModalContent addresses={[]} />} isOpen={true} close={() => setShowModal(false)} />
      ) : null}
    </div>
  );
};

export default UserMenu;
