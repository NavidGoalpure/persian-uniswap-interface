import { Percent } from '@uniswap/sdk'
import { ALLOWED_PRICE_IMPACT_HIGH, PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN } from '../../constants'
import i18n from 'i18next'

/**
 * Given the price impact, get user confirmation.
 *
 * @param priceImpactWithoutFee price impact of the trade without the fee.
 */
export default function confirmPriceImpactWithoutFee(priceImpactWithoutFee: Percent): boolean {
  if (!priceImpactWithoutFee.lessThan(PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN)) {
    return (
      window.prompt(
        i18n.t('swapPage.priceImpactAlert', {
          percent: PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN.toFixed(0)
        })
      ) === 'confirm'
    )
  } else if (!priceImpactWithoutFee.lessThan(ALLOWED_PRICE_IMPACT_HIGH)) {
    return window.confirm(
      i18n.t('swapPage.priceImpactAlert', {
        percent: ALLOWED_PRICE_IMPACT_HIGH.toFixed(0)
      })
    )
  }
  return true
}
