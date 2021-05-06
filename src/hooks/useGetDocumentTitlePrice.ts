import { useEffect } from 'react'
import { usePricePsiBusd, usePriceIncomeBusd } from 'state/hooks'

const useGetDocumentTitlePrice = () => {
  const psiPriceUsd = usePricePsiBusd()
  const incPriceUsd = usePriceIncomeBusd()

  let priceString = psiPriceUsd.eq(0)
      ? ''
      : ` | PSI - $${psiPriceUsd.toNumber().toLocaleString(undefined, {
          minimumFractionDigits: 3,
          maximumFractionDigits: 3,
        })}`
  priceString = incPriceUsd.eq(0)
      ? ''
      : ` | PSI - $${incPriceUsd.toNumber().toLocaleString(undefined, {
          minimumFractionDigits: 3,
          maximumFractionDigits: 3,
        })}`

  useEffect(() => {
    document.title = `PSI Dex${priceString}`
  }, [priceString])
}
export default useGetDocumentTitlePrice
