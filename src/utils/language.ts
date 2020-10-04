import i18next from 'i18next'
import { CSSObject } from 'styled-components'
export enum RtlLanguages {
  fa = 'fa'
}

export function getLanguageDirection(): string {
  return i18next.language in RtlLanguages ? 'rtl' : 'ltr'
}
export function getCurrentLanguage(): string {
  if (i18next && i18next?.languages) return i18next?.languages[0]
  return 'en'
}
export function setLanguageDirection(dir?: string): string {
  if (dir === 'rtl') return 'rtl'
  if (dir === 'ltr') return 'ltr'
  return getLanguageDirection()
}
export function setAbsoluteDirectionToStart(value: string): string {
  if (getLanguageDirection() === 'rtl') return `right:${value}`
  return `left:${value}`
}
export function setAbsoluteDirectionToEnd(value: string): string {
  if (getLanguageDirection() === 'rtl') return `left:${value}`
  return `right:${value}`
}
export function setMarginToStart(value: string): string {
  if (getLanguageDirection() === 'rtl') return `margin-right:${value}`
  return `margin-left:${value}`
}
export function setMarginToEnd(value?: string): string {
  if (getLanguageDirection() === 'rtl') return `margin-left:${value}`
  return `margin-right:${value}`
}
export function addMarginToEndOfCSSObject(value: string): CSSObject {
  if (getLanguageDirection() === 'rtl') return { marginLeft: value }
  return { marginRight: value }
}
export function addMarginToStartOfCSSObject(value: string): CSSObject {
  if (getLanguageDirection() === 'rtl') return { marginRight: value }
  return { marginLeft: value }
}
export function addPaddingToEndOfCSSObject(value: string): CSSObject {
  if (getLanguageDirection() === 'rtl') return { paddingLeft: value }
  return { paddingRight: value }
}
export function addPaddingToStartOfCSSObject(value: string): CSSObject {
  if (getLanguageDirection() === 'rtl') return { paddingRight: value }
  return { paddingLeft: value }
}
