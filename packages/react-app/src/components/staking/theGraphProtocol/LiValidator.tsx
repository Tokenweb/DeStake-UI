import React from 'react'
import { IndexerView, StakeView } from '../../../types/theGraphProtocol'
import Avatar from '../../common/Avatar'
import './LiValidator.scoped.css'

interface Props {
  index: number
  validator: IndexerView
  stake?: StakeView
}

const LiValidator = ({ index, validator, stake } : Props) => {

  return (
      <tr
        className={`li-validator`}
      >
        <td>{ index + 1 }</td>
        <td className="data-table__row__info">
          <div className="li-validator-image">
            <Avatar
              alt="generic validator logo - generated avatar from address"
              address={validator.address}
              human={true}
            />
          </div>
          <div className="validator-info">
            <h3 className="li-validator-name">
              { validator.address || '--' }
            </h3>
            { stake != null && parseInt(stake.lockedTokensDisplay, 10) > 0 && 
              <div>
                <h4>
                  { stake.lockedTokensDisplay }
                </h4>
                <h5>
                  <span>
                    +{ stake.realizedRewards }
                  </span>
                </h5>
              </div>
            }
          </div>
        </td>
        <td>
          { validator.stakedTokensDisplay }
        </td>
        <td>
          { validator.lockedTokensDisplay}
        </td>
        <td>
          { validator.rewardsEarnedDisplay}
        </td>
        <td>
          { validator.indexingRewardCut }
        </td>
        <td>
          { validator.queryFeeCut}
        </td>
        <td>
          { validator.annualizedReturnDisplay}
        </td>
      </tr>
  )
}

export default LiValidator
