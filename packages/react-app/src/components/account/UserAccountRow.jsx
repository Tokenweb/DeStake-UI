import React from 'react'
import { capitalizeFirstLetter } from '../../utils/helpers'
import { formatAddress } from '../../utils/address'
import './UserAccountRow.scoped.css'

const UserAccountRow = ({ address }) => {

  return (
      <div className="address-item">
        <img
          className="network-icon"
          src={address.icon || `/img/networks/${address.networkId}.png`}
          alt="little circle with network logo"
        />
        <div className="address-infos">
          <div className="address-name-role">
            { address.name && 
              <span className="address-name">
                {capitalizeFirstLetter(address.name)}
              </span>
            }
            { address.addressRole &&
              address.addressRole !== `none` &&
              address.addressRole !== `stash/controller` &&
              <span>
                { address.name ? "&nbsp;" : ""}{ capitalizeFirstLetter(address.addressRole) }
              </span>
            }
          </div>
          <span className="address">
            {formatAddress(address.address)}
          </span>
          { address.sessionType &&
            <span className="address">
              { capitalizeFirstLetter(address.sessionType) }
            </span>
          }
        </div>
      </div>
  )
}

export default UserAccountRow
