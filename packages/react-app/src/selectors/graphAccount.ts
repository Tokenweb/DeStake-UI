
import { createSelector } from 'reselect'
import { nativeToDisplayBalance } from '../utils/formatters'
import { GraphAccount, GraphAccountView } from '../types/theGraphProtocol'
import { convertToChecksum } from '../utils/helpers'

const formatDelegatorTotals = (totals: DelegatorTotals): DelegatorTotalsView => {
  return totals != null ? 
    {
      ...totals,
      totalStakedTokensDisplay: nativeToDisplayBalance(totals.totalStakedTokens),
      totalUnstakedTokensDisplay: nativeToDisplayBalance(totals.totalUnstakedTokens),
      totalRealizedRewardsDisplay: nativeToDisplayBalance(totals.totalRealizedRewards)
    }
    :
    null
}

const formatCuratorTotals = (totals: CuratorTotals): CuratorTotalsView => {
  return totals !== null ? 
    {
      ...totals,
      totalSignalledTokensDisplay: nativeToDisplayBalance(totals.totalSignalledTokens),
      totalUnsignalledTokensDisplay: nativeToDisplayBalance(totals.totalUnsignalledTokens),
      totalWithdrawnTokensDisplay: nativeToDisplayBalance(totals.totalWithdrawnTokens),
      realizedRewardsDisplay: nativeToDisplayBalance(totals.realizedRewards),
      annualizedReturnDisplay: nativeToDisplayBalance(totals.annualizedReturn),
      totalReturnDisplay: nativeToDisplayBalance(totals.totalReturn)
    }
    :
    null
}

const formatGraphAccount = (account: GraphAccount): GraphAccountView => {
  return {
    ...account,
    address: convertToChecksum(account.id),
    balanceDisplay: nativeToDisplayBalance(account.balance),
    curationApprovalDisplay: nativeToDisplayBalance(account.curationApproval),
    stakingApprovalDisplay: nativeToDisplayBalance(account.stakingApproval),
    gnsApprovalDisplay: nativeToDisplayBalance(account.gnsApproval),
    delegator: formatDelegatorTotals(account.delegator),
    curator: formatCuratorTotals(account.curator)
  }
}

export const selectGraphAccount = createSelector(
  [(a: GraphAccount): GraphAccount => a],
  (account: GraphAccount): GraphAccountView => {
    return formatGraphAccount(account) as GraphAccountView
  }
)

