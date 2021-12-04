// copied from https://gitlab.avcd.cz/backend/open-design-docs/-/blob/master/declarations/styled.d.ts
// this is here so that octopus-format works without any patches
// styled.d.ts
import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    primaryDark: string
    primaryDarkHover: string
    primaryDarkActive: string
    primaryLight: string
    primaryLightHover: string
    primaryLightActive: string
    primaryNormal: string
    primaryNormalActive: string
    primaryNormalHover: string
    blueNormal: string
    blueNormalActive: string
    blueNormalHover: string
    blueLight: string
    blueLightActive: string
    blueLightHover: string
    blueDark: string
    blueDarkActive: string
    blueDarkHover: string
    orangeNormal: string
    orangeNormalActive: string
    orangeNormalHover: string
    redNormal: string
    redNormalActive: string
    redNormalHover: string
    purpleNormal: string
    purpleNormalActive: string
    purpleNormalHover: string
    inkPrimary: string
    inkSecondary: string
    inkTertiary: string
    paintPrimary: string
    paintSecondary: string
    paintTertiary: string
    productNormal: string
    productNormalActive: string
    productNormalHover: string
    fontFamilySansSerif: string
    fontFamilyMonospace: string
  }
}
