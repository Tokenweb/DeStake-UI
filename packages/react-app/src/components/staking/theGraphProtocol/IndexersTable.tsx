import React, { useState } from 'react'
import ReactToolTip from 'react-tooltip'

import { GetIndexers } from '../../../queries/indexers'
import TmDataLoading from '../../common/TmDataLoading'
import PanelSort from '../PanelSort'
import LiValidator from './LiValidator'
import tableFields from './tableFields'

const DIRECTIONS = ['asc', 'desc']

const initialState = {
  sortField: null,
  sortDirection: 1
}

const SORT_STATE = {
  sortField: 'stakedTokens',
  sortDirection: 'desc',
  properties: tableFields
}

const PAGINATION_STATE = {
  first: 7,
  skip: 0
}

const IndexersTable = () => {
  const [state, setState] = useState({...initialState, ...SORT_STATE, sortDirection: SORT_STATE.sortDirection === 'asc' ? 0 : 1})

  const toggleDirection = () => {
    console.log('togglin')
    const sortDirection = (state.sortDirection + 1) % 2
    setState({...state, sortDirection})
    updateSort(state.sortField, sortDirection === 0 ? 'asc' : 'desc')

  }

  const setSortField = (sortField: string) => {
    console.log('sortin')
    setState({...state, sortField, sortDirection: 1})
    updateSort(sortField, 'desc')
  }
  
  const {loading: loadingIndexers, indexers, error, refetch } = GetIndexers(PAGINATION_STATE.skip, PAGINATION_STATE.first, SORT_STATE.sortField, state.sortDirection === 0 ? 'asc' : 'desc')
  const loading = {
    loading: loadingIndexers,
    // src:"/img/validator-list-loading.svg",
    alt: 'loading table'
  }

  const updateSort = (orderBy: string, orderDirection: string) => refetch({skip: PAGINATION_STATE.skip, first: PAGINATION_STATE.first, orderBy, orderDirection })

  console.log(`INdexers Table\n${JSON.stringify(indexers)}`)
  const body = loadingIndexers ? 
    <TmDataLoading {...loading} />
    :
    indexers !== null ?
      indexers.map((validator, i) => <LiValidator key={validator.id} index={i} validator={validator} />)
      :
      <div> error loading table</div>

  return (
    <div>
      <ReactToolTip place='top' />
    <table>
      <PanelSort sortField={state.sortField} properties={state.properties} sortDirection={state.sortDirection} setSortField={setSortField} toggleDirection={toggleDirection} />
      <tbody>
        {body}
      </tbody>
    </table>
    </div>
  )

}

export default IndexersTable 
  