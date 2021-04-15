

import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { selectIndexers, selectIndexer } from '../selectors/indexer'
import { Indexer } from '../types/theGraphProtocol'
import { theGraphNetworkClient } from '../utils/apolloClient'

interface IndexersQueryVars {
  skip: number
  first: number
  orderBy: string
  orderDirection:string
}

interface IndexerQueryVars {
  id: string
}

interface GetIndexersData {
  indexers: Indexer[]
}

interface GetIndexerData {
  indexer: Indexer
}

const INDEXER_FIELDS = gql`
    fragment IndexerFields on Indexer {
      id
      stakedTokens
      unstakedTokens
      lockedTokens
      tokensLockedUntil
      totalAllocations
      allocationCount
      queryFeesCollected
      queryFeeRebates
      rewardsEarned
      totalReturn
      annualizedReturn
      indexingRewardCut
      queryFeeCut
      delegatedTokens
      ownStakeRatio
      availableStake
      tokenCapacity
      delegatedCapacity
      url
    }
  `

export const GET_INDEXERS  = gql`
  ${INDEXER_FIELDS}
  query indexers($skip: Int!, $first: Int!, $orderBy: String!, $orderDirection: String!) {
    indexers(skip: $skip, first: $first, orderBy: $orderBy, orderDirection: $orderDirection) {
      ...IndexerFields
    }
}
`

export const GetIndexers = (skip: number, first: number, orderBy: string, orderDirection: string) => {
  const {loading, error, data, fetchMore, refetch, networkStatus } = useQuery<GetIndexersData, IndexersQueryVars>(
    GET_INDEXERS,
    {
      client: theGraphNetworkClient,
      variables: { skip, first, orderBy, orderDirection },
      fetchPolicy: 'no-cache',
      notifyOnNetworkStatusChange: true
    });

    console.log(`got indexers ${loading} - ${networkStatus}`)
  return {
    fetchMore,
    refetch,
    loading,
    error,
    indexers: data ? selectIndexers(data.indexers) : null
  } 
}

export const GET_INDEXER  = gql`
  ${INDEXER_FIELDS}
  query indexer($id: ID!) {
    indexer(id: $id) {
      ...IndexerFields
    }
}
`

export const GetIndexer = (id: string) => {
  const {loading, error, data} = useQuery<GetIndexerData, IndexerQueryVars>(
    GET_INDEXER,
    {
      client: theGraphNetworkClient,
      variables: { id },
      fetchPolicy: 'no-cache'
    });
  return {
    loading,
    error,
    indexer: data ? selectIndexer(data.indexer) : null
  } 
}