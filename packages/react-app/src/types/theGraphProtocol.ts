import { string } from 'yup';

export interface Indexer {
  id: string;
  stakedTokens: string;
  unstakedTokens: string;
  lockedTokens: string;
  tokensLockedUntil: number;
  totalAllocations: string;
  allocationCount: number;
  queryFeesCollected: string;
  queryFeeRebates: string;
  rewardsEarned: string;
  totalReturn: string;
  annualizedReturn: string;
  indexingRewardCut: number;
  queryFeeCut: number;
  delegatedTokens: string;
  ownStakeRatio: string;
  availableStake: string;
  tokenCapacity: string;
  delegatedCapacity: string;
  url: string;
}

export interface IndexerView extends Indexer {
  address: string;
  annualizedReturnDisplay: string;
  availableStakeDisplay: string;
  delegatedCapacityDisplay: string;
  delegatedTokensDisplay: string;
  lockedTokensDisplay: string;
  ownStakeRatioDisplay: string;
  queryFeeRebatesDisplay: string;
  queryFeesCollectedDisplay: string;
  rewardsEarnedDisplay: string;
  stakedTokensDisplay: string;
  tokenCapacityDisplay: string;
  totalReturnDisplay: string;
  unstakedTokensDisplay: string;
}

export interface Stake {
  id: string;
  createdAt: number;
  indexer: string;
  lockedTokens: string;
  lockedUntil: number;
  personalExchangeRate: string;
  realizedRewards: string;
  shareAmount: string;
  stakedTokens: string;
  unstakedTokens: string;
}

export interface StakeView extends Stake {
  address: string;
  lockedTokensDisplay: string;
  realizedRewardsDisplay: string;
  shareAmountDisplay: string;
  stakedTokensDisplay: string;
  unstakedTokensDisplay: string;
}

export interface DelegatorTotals {
  id: string;
  totalStakedTokens: string;
  totalUnstakedTokens: string;
  totalRealizedRewards: string;
}

export interface DelegatorTotalsView extends DelegatorTotals {
  totalStakedTokensDisplay: string;
  totalUnstakedTokensDisplay: string;
  totalRealizedRewardsDisplay: string;
}

export interface CuratorTotals {
  id: string;
  totalSignalledTokens: string;
  totalUnsignalledTokens: string;
  totalWithdrawnTokens: string;
  realizedRewards: string;
  annualizedReturn: string;
  totalReturn: string;
}

export interface CuratorTotalsView extends CuratorTotals {
  totalSignalledTokensDisplay: string;
  totalUnsignalledTokensDisplay: string;
  totalWithdrawnTokensDisplay: string;
  realizedRewardsDisplay: string;
  annualizedReturnDisplay: string;
  totalReturnDisplay: string;
}

export interface GraphAccount {
  id: string;
  balance: string;
  curationApproval: string;
  stakingApproval: string;
  gnsApproval: string;
  delegator: DelegatorTotals | null;
  curator: CuratorTotals | null;
}

export interface GraphAccountView
  extends Omit<GraphAccount, 'curator' | 'developer'> {
  address: string;
  balanceDisplay: string;
  curationApprovalDisplay: string;
  stakingApprovalDisplay: string;
  gnsApprovalDisplay: string;
  delegator: DelegatorTotalsView | null;
  curator: CuratorTotalsView | null;
}
