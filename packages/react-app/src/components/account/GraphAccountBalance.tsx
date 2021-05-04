import React from 'react'
import { useGetGraphAccount } from '../../queries/graphAccount'
import BalanceRow from '../common/BalanceRow'
import { convertToChecksum } from '../../utils/helpers'
import TmDataLoading from '../common/TmDataLoading'

const GraphAccountBalance = (props: any) => {
  const address = convertToChecksum(props.urlAddress)
  const {loading: loadingAccount, account } = useGetGraphAccount(address)

  const loading = {
    loading: loadingAccount,
    // src:"/img/validator-list-loading.svg",
    alt: 'loading table'
  }

  const body = loadingAccount ? 
    <TmDataLoading {...loading} />
    :
    account !== null ?
      <BalanceRow account={account} />
      :
      <div>No account for {address}</div>

  return body

}

export default GraphAccountBalance 
  