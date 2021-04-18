import { useEffect } from 'react'
import { usePriceIncomeBusd } from 'state/hooks'

const useGetDocumentTitlePrice = () => {
  const incomePriceUsd = usePriceIncomeBusd()

  const incomePriceUsdString = incomePriceUsd.eq(0)
    ? ''
    : ` - $${incomePriceUsd.toNumber().toLocaleString(undefined, {
        minimumFractionDigits: 3,
        maximumFractionDigits: 3,
      })}`

  useEffect(() => {
    document.title = `PancakeSwap${incomePriceUsdString}`
  }, [incomePriceUsdString])
}
export default useGetDocumentTitlePrice
