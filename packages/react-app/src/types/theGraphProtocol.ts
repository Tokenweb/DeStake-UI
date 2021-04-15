export interface Indexer {
  id: string
  stakedTokens: string
  unstakedTokens: string
  lockedTokens: string
  tokensLockedUntil: number
  totalAllocations: string
  allocationCount: number
  queryFeesCollected: string
  queryFeeRebates: string
  rewardsEarned: string
  totalReturn: string
  annualizedReturn: string
  indexingRewardCut: number
  queryFeeCut: number
  delegatedTokens: string
  ownStakeRatio: string
  availableStake: string
  tokenCapacity: string
  delegatedCapacity: string
  url: string
}

export interface IndexerView extends Indexer {
  address: string
  annualizedReturnDisplay: string
  availableStakeDisplay: string
  delegatedCapacityDisplay: string
  delegatedTokensDisplay: string
  lockedTokensDisplay: string
  ownStakeRatioDisplay: string
  queryFeeRebatesDisplay: string
  queryFeesCollectedDisplay: string
  rewardsEarnedDisplay: string
  stakedTokensDisplay: string
  tokenCapacityDisplay: string
  totalReturnDisplay: string
  unstakedTokensDisplay: string
}

export interface Stake {
  id: string
  createdAt: number
  indexer: string
  lockedTokens: string
  lockedUntil: number
  personalExchangeRate: string
  realizedRewards: string
  shareAmount: string
  stakedTokens: string
  unstakedTokens: string
}

export interface StakeView extends Stake {
  address: string
  lockedTokensDisplay: string
  realizedRewardsDisplay: string
  shareAmountDisplay: string
  stakedTokensDisplay: string
  unstakedTokensDisplay: string
}