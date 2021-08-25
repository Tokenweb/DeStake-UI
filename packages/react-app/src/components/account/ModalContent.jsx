import { MdBuild, MdExitToApp, MdAddCircle } from 'react-icons/md';

import UserAccountRow from './UserAccountRow';

const LiAddress = ({ address, selectAddress }) => {
  return (
    <UserAccountRow address={address} onClick={() => selectAddress(address)} />
  );
};

const ModalContent = ({ user, addresses, closeModal, signIn, signOut }) => {
  return (
    <div slot='popover'>
      <div className='user-popover'>
        <h3 className='email'>{(user && user.email) || `Anonymous User`}</h3>
      </div>
      <div className='address-list'>
        {addresses.map((a) => (
          <LiAddress key={a.address} {...a} />
        ))}
      </div>
      <div id='create-new-account' className='menu-list-item'>
        <span>Add an address</span>
        <MdAddCircle className='material-icons' />
      </div>
      <div id='manage-accounts' className='menu-list-item'>
        <span>Manage Addresses</span>
        <MdBuild className='material-icons' />
      </div>
      {user && user.userSignedIn ? (
        <div>
          <div className='menu-list-item' onClick={closeModal}>
            <span>Settings</span>
            <i className='material-icons'>settings</i>
          </div>
          <div className='menu-list-item' onClick='closeModal'>
            <span>Manage Subscription</span>
            <i className='material-icons'>payment</i>
          </div>
          <div className='menu-list-item outline' onClick={signOut}>
            <span>Logout</span>
            <MdExitToApp className='material-icons' />
          </div>
        </div>
      ) : (
        <div>
          <div className='menu-list-item outline' onClick={signIn}>
            <span>Sign In</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalContent;
