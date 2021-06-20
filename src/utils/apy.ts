import BigNumber from 'bignumber.js'
import { BLOCKS_PER_YEAR, INCOME_PER_BLOCK } from 'config'

/**
 * Get the APY value in %
 * @param stakingTokenPrice Token price in the same quote currency
 * @param rewardTokenPrice Token price in the same quote currency
 * @param totalStaked Total amount of stakingToken in the pool
 * @param tokenPerBlock Amount of new cake allocated to the pool for each new block
 * @returns Null if the APY is NaN or infinite.
 */
export const getPoolApy = (
  stakingTokenPrice: number,
  rewardTokenPrice: number,
  totalStaked: number,
  tokenPerBlock: number,
): number => {
  const totalRewardPricePerYear = new BigNumber(rewardTokenPrice).times(tokenPerBlock).times(BLOCKS_PER_YEAR)
  const totalStakingTokenInPool = new BigNumber(stakingTokenPrice).times(totalStaked)
  const apy = totalRewardPricePerYear.div(totalStakingTokenInPool).times(100)
  return apy.isNaN() || !apy.isFinite() ? null : apy.toNumber()
}

/**
 * Get farm APY value in %
 * @param poolWeight allocationPoint / totalAllocationPoint
 * @param incomePriceUsd Income price in USD
 * @param poolLiquidityUsd Total pool liquidity in USD
 * @returns
 */
export const getFarmApy = (poolWeight: BigNumber | string, incomePriceUsd: BigNumber, poolLiquidityUsd: BigNumber): number => {
  const finalPoolWeight: BigNumber = typeof(poolWeight) === "string" ? new BigNumber(poolWeight) : poolWeight;
  const yearlyInconmeRewardAllocation = INCOME_PER_BLOCK.times(BLOCKS_PER_YEAR).times(finalPoolWeight).div(10**18)
  const apy = yearlyInconmeRewardAllocation.times(incomePriceUsd).div(poolLiquidityUsd).times(100)
  return apy.isNaN() || !apy.isFinite() ? null : apy.toNumber()
}

export default null
