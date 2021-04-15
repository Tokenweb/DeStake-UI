import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from '../common/Modal'
import UserAccountRow from './UserAccountRow'
import UserMenuAddress from './UserMenuAddress'
import Avatar from '../common/Avatar'
import './UserMenu.scoped.css'

const LiAddress = ({ address, selectedAddress, selectAddress, selectedNetwork }) => {
  return (

      <UserAccountRow
        address={address}
        onClick={() => selectAddress(address)}
      />
  )
}

const ModalContent = ({user, addresses, closeModal, signIn, signOut}) => {
  return (
    <div slot="popover">
      <div className="user-popover">
        <h3 className="email">{ (user && user.email) || `Anonymous User` }</h3>
      </div>
      <div className="address-list">
        {addresses.map(a => <LiAddress key={a.address} {...a} />)}
      </div>
      <div
        id="create-new-account"
        className="menu-list-item"
      >
        <span>Add an address</span>
        <i className="material-icons">add_circle</i>
      </div>
      <div
        id="manage-accounts"
        className="menu-list-item"
      >
        <span>Manage Addresses</span>
        <i className="material-icons">build</i>
      </div>
      { user.userSignedIn ? 
        <div>
          <div
            className="menu-list-item"
            onClick={closeModal}
          >
            <span>Settings</span>
            <i className="material-icons">settings</i>
          </div>
          <div
            className="menu-list-item"
            onClick="closeModal"
          >
            <span>Manage Subscription</span>
            <i className="material-icons">payment</i>
          </div>
          <div className="menu-list-item outline"
            onClick={signOut}
          >
            <span>Logout</span>
            <i className="material-icons">exit_to_app</i>
          </div>
        </div>
      :
        <div>
          <div
            className="menu-list-item outline"
            onClick={signIn}
          >
            <span>Sign In</span>
            <i className="material-icons">email</i>
          </div>
        </div>
      }
    </div>
  )
}
const UserMenu = ({user, address, sessionType, ledgerAddressError}) => {
  const [showModal, setShowModal] = useState(false)

  return (

      <div className="user-menu" onClick={() => setShowModal(true)}>
        { address ? 
          <UserMenuAddress
            address={address}
            sessionType={sessionType}
          />
          :
          <div>Connect</div>
        }
        <Link to='/notifications'
          className="user-menu-icon-container notifications"
        >
          <i className="material-icons">notifications</i>
        </Link>
        <div className="avatar-container" >
          { user &&
            <span className="user-menu-icon-container tooltip-target">
              <i className="material-icons">person</i>
            </span>
          }
          { user && 
            <Avatar
              className="avatar tooltip-target"
              address={user ? user.email : ''}
              human={true}
            />
          }
        </div>
          { showModal ?
            <Modal content={<ModalContent />} isOpen={true} close={() => setShowModal(false)} />
            :
            null
          }

      </div>
  
  )
}

export default UserMenu
