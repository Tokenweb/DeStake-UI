import React, { useState } from 'react'
import { css } from '@emotion/react'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { formatAddress } from '../../utils/address';

interface Props {
  address: string
  addressType?: string
  toolTipText?: string
}

const Address = ({ address, addressType, toolTipText }: Props) => {
  const className = css`
    .copyable-address {
      font-size: 14px;
      display: inline-flex;
      height: 2rem;
      padding: 0 1rem;
      border-radius: 1rem;
      margin: 0;
      background: var(--app-fg);
    }
    
    .copyable-address.with-type {
      height: 2.5rem;
    }
    
    .copyable-address .type {
      font-size: 10px;
      line-height: 10px;
      color: var(--dim);
      margin-top: 1px;
    }
    
    .copyable-address .address {
      white-space: nowrap;
      display: inline-flex;
      align-items: center;
      cursor: pointer;
      color: var(--link);
    }
    
    .copyable-address .address-section {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    
    .menu-address .address {
      color: var(--menu-link);
    }
    
    .copyable-address .address:hover {
      color: var(--link-hover);
    }
    
    .menu-address .address:hover {
      color: var(--menu-link-hover);
    }
    
    .copyable-address .icon-container {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .copyable-address .icon-container .success {
      opacity: 0;
      transition: opacity 250ms ease;
    }
    
    .copyable-address .icon-container.active .success {
      opacity: 1;
    }
    
    .copyable-address i {
      font-size: 14px;
      padding-left: 0.25rem;
    }
    
    .copyable-address .icon-container i.success {
      color: var(--success);
    }
    
    .material-icons {
      font-size: 14px;
    }
  `

  const [ copied, setCopied ] = useState(false)

  const handleCopy = () => {
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <div className={className.styles}>
      <CopyToClipboard text={address}
        onCopy={handleCopy}
        className="address"
      >
        <div className="address-section">
          { addressType && <span className="type"> {{ addressType }} Address </span>}
          <span>{ formatAddress(address)}</span>
        </div>
        <div className={`icon-container ${copied ? 'active' : ''}`}>
          <i className="material-icons notranslate success">check</i>
        </div>
        <i className="material-icons notranslate copy">content_copy</i>
      </CopyToClipboard>
    </div>
  )
}

export default Address
