import React from 'react'
import PanelSort from './PanelSort'
import LiValidator from './theGraphProtocol/LiValidator'


const TableValidators = ({validators, sort, updateSort}) => {
  
  const rows = validators.map((validator, i) => <LiValidator key={validator.id} index={i} validator={validator} />)

  return (
      <div>
        <table className="data-table">
          <thead>
            <PanelSort
              sortField={sort.field}
              sortDirection={sort.direction}
              properties={sort.properties}
              updateSort={updateSort}
            />
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>

  )
}

export default TableValidators

/*
const Sort = (props) => (
  <div name="fade">
  <ul className="sortingOptions">
    <li
      :className="{ active: isSortedBy(`popularity`) }"
      @click="sortBy(`popularity`)"
    >
      <i className="sorting-icon material-icons notranslate">star_rate</i>
      Popular on Destake
      <i
        :className="{ inactive: !isSortedBy(`popularity`) }"
        className="sorting-check material-icons notranslate"
        >check</i
      >
    </li>
    <li
      :className="{ active: isSortedBy(`votingPower`) }"
      @click="sortBy(`votingPower`)"
    >
      <i className="sorting-icon material-icons notranslate">flash_on</i> Voting
      Power
      <i
        :className="{ inactive: !isSortedBy(`votingPower`) }"
        className="sorting-check material-icons notranslate"
        >check</i
      >
    </li>
    <li
      :className="{ active: isSortedBy(`expectedReturns`) }"
      @click="sortBy(`expectedReturns`)"
    >
      <i className="sorting-icon material-icons notranslate">emoji_events</i>
      Most Rewards
      <i
        :className="{ inactive: !isSortedBy(`expectedReturns`) }"
        className="sorting-check material-icons notranslate"
        >check</i
      >
    </li>
  </ul>
</div>
)
*/