import React from 'react'
import { Text } from 'rebass'
import { ExternalLink } from '../../theme'
import { ButtonPrimary } from '../Button'
import { OutlineCard } from '../Card'
import Column, { AutoColumn } from '../Column'
import { PaddedColumn } from './styleds'
import { useDarkModeManager } from '../../state/user/hooks'

import listLight from '../../assets/images/token-list/lists-light.png'
import listDark from '../../assets/images/token-list/lists-dark.png'
import { useTranslation } from 'react-i18next'
import { setLanguageDirection, getCurrentLanguage } from '../../utils/language'

export default function ListIntroduction({ onSelectList }: { onSelectList: () => void }) {
  const [isDark] = useDarkModeManager()
  const { t } = useTranslation()

  return (
    <Column style={{ width: '100%', flex: '1 1' }}>
      <PaddedColumn>
        <AutoColumn gap="14px">
          <img
            style={{ width: '120px', margin: '0 auto' }}
            src={isDark ? listDark : listLight}
            alt="token-list-preview"
          />
          <img
            style={{ width: '100%', borderRadius: '12px' }}
            src="https://cloudflare-ipfs.com/ipfs/QmRf1rAJcZjV3pwKTHfPdJh4RxR8yvRHkdLjZCsmp7T6hA"
            alt="token-list-preview"
          />
          <Text style={{ marginBottom: '8px', textAlign: 'center' }} dir={setLanguageDirection()}>
            {t('tokenList.guide')}
          </Text>
          <ButtonPrimary onClick={onSelectList} id="list-introduction-choose-a-list">
            {t('tokenList.chooseList')}
          </ButtonPrimary>
          {getCurrentLanguage() === 'fa' ? (
            <OutlineCard style={{ marginBottom: '8px', padding: '1rem' }}>
              <Text fontWeight={400} fontSize={14} style={{ textAlign: 'center' }} dir={setLanguageDirection()}>
                {t('tokenList.footerSection1')}
                <ExternalLink href="https://github.com/uniswap/token-lists"> {t('openSpecification')}</ExternalLink>
                {t('tokenList.footerSection2')}
                {t('toLearnMore')}
                <ExternalLink href="https://tokenlists.org">tokenlists.org</ExternalLink> {t('checkOut')} {'.'}
              </Text>
            </OutlineCard>
          ) : (
            <OutlineCard style={{ marginBottom: '8px', padding: '1rem' }}>
              <Text fontWeight={400} fontSize={14} style={{ textAlign: 'center' }} dir={setLanguageDirection()}>
                {t('tokenList.footerSection1')}
                <ExternalLink href="https://github.com/uniswap/token-lists"> {t('openSpecification')}</ExternalLink>.
                {t('checkOut')}
                <ExternalLink href="https://tokenlists.org"> tokenlists.org </ExternalLink> {t('toLearnMore')} {'.'}
              </Text>
            </OutlineCard>
          )}
        </AutoColumn>
      </PaddedColumn>
    </Column>
  )
}
