import React, { useState } from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { MdCheck, MdContentCopy} from 'react-icons/md'
import { formatAddress } from '../../utils/address';

interface Props {
  address: string
  addressType?: string
  toolTipText?: string
}

const Address = ({ address, addressType, toolTipText }: Props) => {

  const [ copied, setCopied ] = useState(false)

  const handleCopy = () => {
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <CopyToClipboard text={address}
      onCopy={handleCopy}
      className="address"
    >
      <span>
        <div className="address-section">
          { addressType && <span className="type"> {{ addressType }} Address </span>}
          <span>{ formatAddress(address)}</span>
        </div>
        <div className={`icon-container ${copied ? 'active' : ''}`}>
          <MdCheck className="material-icons notranslate success" />
        </div>
        <MdContentCopy className="material-icons notranslate copy" />
      </span>
    </CopyToClipboard>
  )
}

export default Address
