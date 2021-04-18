import { usePriceIncomeBusd } from 'state/hooks'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalRewards } from './useTickets'

const useLotteryTotalPrizesUsd = () => {
  const totalRewards = useTotalRewards()
  const totalCake = getBalanceNumber(totalRewards)
  const incomePriceBusd = usePriceIncomeBusd()

  return totalCake * incomePriceBusd.toNumber()
}

export default useLotteryTotalPrizesUsd
