// Copied from https://gitlab.avcd.cz/backend/open-design-docs/-/blob/master/src/common/styles/theme.ts
// this is here so that octopus-format works without any patches
import { DefaultTheme } from 'styled-components'

export const mainTheme: Omit<DefaultTheme, primaryLight | primaryNormal | PrimaryDark> = {
  orangeNormal: '#FFA800',
  orangeNormalActive: '#FFA800', // TODO
  orangeNormalHover: '#FFA800', // TODO

  redNormal: '#CD3222',
  redNormalActive: '#CD3222', // TODO
  redNormalHover: '#CD3222', // TODO

  purpleNormal: '#7100D0',
  purpleNormalActive: '#4F0092', // TODO
  purpleNormalHover: '#4F0092',

  blueNormal: '#115DF6',
  blueNormalActive: '#103D98',
  blueNormalHover: '#1250CC',

  blueDark: '#0D3380',
  blueDarkHover: '#0D3380',
  blueDarkActive: '#0D3380',

  blueLight: '#E8F0FF',
  blueLightHover: '#CADCFF',
  blueLightActive: '#BCD3FF',

  inkPrimary: '#04070B',
  inkSecondary: '#0E1520',
  inkTertiary: '#606977',

  paintPrimary: '#FFFFFF',
  paintSecondary: '#F8F9FA',
  paintTertiary: '#E9ECEE',

  productNormal: '#00BC87',
  productNormalActive: '#007756',
  productNormalHover: '#06976E',

  fontFamilySansSerif: '"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif',
  fontFamilyMonospace: '"Fira Code", Courier, monospace',
}

type primaryLight = 'primaryLight' | 'primaryLightHover' | 'primaryLightActive'
type primaryNormal = 'primaryNormal' | 'primaryNormalHover' | 'primaryNormalActive'
type PrimaryDark = 'primaryDark' | 'primaryDarkHover' | 'primaryDarkActive'

export const blueTheme: Pick<DefaultTheme, primaryLight | primaryNormal | PrimaryDark> = {
  primaryDark: '#0D3380',
  primaryDarkHover: '#0D3380',
  primaryDarkActive: '#0D3380',

  primaryLight: '#E8F0FF',
  primaryLightHover: '#CADCFF',
  primaryLightActive: '#BCD3FF',

  primaryNormal: '#115DF6',
  primaryNormalActive: '#103D98',
  primaryNormalHover: '#1250CC',
}

export const greenTheme: Pick<DefaultTheme, primaryLight | primaryNormal | PrimaryDark> = {
  primaryDark: '#01684B',
  primaryDarkHover: '#01684B',
  primaryDarkActive: '#01684B',

  primaryLight: '#E6F8F3',
  primaryLightHover: '#E6F8F3',
  primaryLightActive: '#E6F8F3',

  primaryNormal: '#00BC87',
  primaryNormalActive: '#007756',
  primaryNormalHover: '#06976E',
}

export const purpleTheme: Pick<DefaultTheme, primaryLight | primaryNormal | PrimaryDark> = {
  primaryDark: '#4F0092',
  primaryDarkHover: '#4F0092',
  primaryDarkActive: '#4F0092',

  primaryNormal: '#7100D0',
  primaryNormalActive: '#6000B1',
  primaryNormalHover: '#6000B1',

  primaryLight: '#F1E6FA',
  primaryLightHover: '#F1E6FA',
  primaryLightActive: '#F1E6FA',
}
