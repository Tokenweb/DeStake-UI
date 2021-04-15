import React from 'react'
import AppPage from '../common/AppPage'
import TableValidators from '../staking/TableValidators'
import { GetIndexers } from '../../queries/indexers'
import tableFields from '../staking/theGraphProtocol/tableFields'
import './Validators.scoped.css'
import IndexersTable from '../staking/theGraphProtocol/IndexersTable'

const SORT_STATE = {
  field: 'stakedTokens',
  direction: 'desc',
  properties: tableFields
}

const PAGINATION_STATE = {
  limit: 20,
  offset: 0
}

const Validators = ({}) => {

  const {loading: loadingIndexers, indexers, error, refetch } = GetIndexers(PAGINATION_STATE.offset, PAGINATION_STATE.limit, SORT_STATE.field, SORT_STATE.direction)
  const loading = {
    loading: loadingIndexers,
    loaderPath:"/img/validator-list-loading.svg"
  }
  console.log(`Vas Page ${loadingIndexers} -- ${indexers} ${error}`)

  const updateSort = (field) => refetch({offset: PAGINATION_STATE.offset, limit: PAGINATION_STATE.limit, orderBy: field, direction: SORT_STATE.direction})

  return (
    <AppPage loading={{loading: false}}>
 
        <div className="filterContainer">filters TBD</div>
        <IndexersTable />
 
    </AppPage>

  )
}

export default Validators
