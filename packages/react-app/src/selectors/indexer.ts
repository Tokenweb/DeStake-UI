import { createSelector } from 'reselect'
import { nativeToDisplayBalance } from '../utils/formatters'
import { Indexer, IndexerView } from '../types/theGraphProtocol'
import { notEmpty, convertToChecksum } from '../utils/helpers'


const formatIndexer = (indexer: Indexer): IndexerView | null => {
  if (indexer) {
    return {
      ...indexer,
      address: convertToChecksum(indexer.id),
      annualizedReturnDisplay: nativeToDisplayBalance(indexer.annualizedReturn),
      availableStakeDisplay: nativeToDisplayBalance(indexer.availableStake),
      delegatedCapacityDisplay: nativeToDisplayBalance(indexer.delegatedCapacity),
      delegatedTokensDisplay: nativeToDisplayBalance(indexer.delegatedTokens),
      lockedTokensDisplay: nativeToDisplayBalance(indexer.lockedTokens),
      ownStakeRatioDisplay: nativeToDisplayBalance(indexer.ownStakeRatio),
      queryFeeRebatesDisplay: nativeToDisplayBalance(indexer.queryFeeRebates),
      queryFeesCollectedDisplay: nativeToDisplayBalance(indexer.queryFeesCollected),
      rewardsEarnedDisplay: nativeToDisplayBalance(indexer.rewardsEarned),
      stakedTokensDisplay: nativeToDisplayBalance(indexer.stakedTokens),
      tokenCapacityDisplay: nativeToDisplayBalance(indexer.tokenCapacity),
      totalReturnDisplay: nativeToDisplayBalance(indexer.totalReturn),
      unstakedTokensDisplay: nativeToDisplayBalance(indexer.unstakedTokens)
    }
  }

  return null
}

export const selectIndexers = createSelector(
  [(i: Indexer[]): Indexer[] => i],
  (indexers: Indexer[]): IndexerView[] => {
    return indexers.map(formatIndexer).filter(notEmpty) 
  }
)

export const selectIndexer = createSelector(
  [(i: Indexer): Indexer => i],
  (indexer: Indexer): IndexerView => {
    return formatIndexer(indexer) as IndexerView
  }
)

