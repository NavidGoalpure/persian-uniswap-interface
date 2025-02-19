import React from 'react'
import styled from 'styled-components'

import { AlertTriangle, X } from 'react-feather'
import { useURLWarningToggle, useURLWarningVisible } from '../../state/user/hooks'
import { isMobile } from 'react-device-detect'
import { useTranslation } from 'react-i18next'
import { addMarginToEndOfCSSObject, setLanguageDirection } from 'utils/language'

const PhishAlert = styled.div<{ isActive: any }>`
  width: 100%;
  padding: 6px 6px;
  background-color: ${({ theme }) => theme.blue1};
  color: white;
  font-size: 11px;
  justify-content: space-between;
  align-items: center;
  display: ${({ isActive }) => (isActive ? 'flex' : 'none')};
`

export const StyledClose = styled(X)`
  :hover {
    cursor: pointer;
  }
`

export default function URLWarning() {
  const toggleURLWarning = useURLWarningToggle()
  const showURLWarning = useURLWarningVisible()
  const { t } = useTranslation()

  return isMobile ? (
    <PhishAlert isActive={showURLWarning}>
      <div style={{ display: 'flex', direction: setLanguageDirection() }}>
        <AlertTriangle style={addMarginToEndOfCSSObject('6px')} size={12} /> {t('makeSureURL')}
        <code style={{ padding: '0 4px', display: 'inline', fontWeight: 'bold' }}>{t('siteAdress')}</code>
      </div>
      <StyledClose size={12} onClick={toggleURLWarning} />
    </PhishAlert>
  ) : window.location.hostname === t('siteAdress') ? (
    <PhishAlert isActive={showURLWarning}>
      <div style={{ display: 'flex' }}>
        <AlertTriangle style={{ marginRight: 6 }} size={12} /> {t('alwaysMakeSureURL')}
        <code style={{ padding: '0 4px', display: 'inline', fontWeight: 'bold' }}>{t('siteAdress')}</code> -{' '}
        {t('bookmarkIt')}.
      </div>
      <StyledClose size={12} onClick={toggleURLWarning} />
    </PhishAlert>
  ) : null
}
