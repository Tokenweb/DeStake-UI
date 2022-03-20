import React from 'react';
import Address from '../common/Address';
import './UserMenuAddress.scoped.css';

const UserMenuAddress = ({
  address,
  sessionType,
}: {
  address: string;
  sessionType: string;
}) => {
  return (
    <div className='address'>
      <div className='menu-address'>
        <Address address={address} />
      </div>
      {sessionType === 'ledger' && (
        <div className='show-on-ledger-container'>
          <button className='show-on-ledger'>Show on Ledger</button>
        </div>
      )}
    </div>
  );
};

export default UserMenuAddress;
