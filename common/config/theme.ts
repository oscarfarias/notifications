interface Palette {
  primary: Array<string>
  secondary: Array<string>
  tertiary: Array<string>
  grey: Array<string>
  light: Array<string>
  success: string
  warning: string
  error: string
  info: string
}
interface Shadow {
  noShadow: string
  gray: string
  container: string
  calling: string
}

export interface Theme {
  colors: Palette
  fontSizes: Array<number>
  space: Array<number | string>
  sizes: Array<number | string>
  radii: Array<number | string>
  breakpoints: Array<string>
  fontWeights: Array<number>
  shadows: Shadow
  bordersColors: Array<string>
}
export default function getTheme(theme?: Theme): Theme {
  const colors: Palette = {
    primary: [`#005483`, `#066CB5`, `#40A9FF`, `#123877`, `#2A53B8`],
    secondary: [`#005483`, `#00C1D0`, `#066CB5`],
    tertiary: [`#FA8C16`, `#965909`, `#86C23C`, `#722ED1`],
    grey: [
      `#000000`,
      `#B7B7B7`,
      `#D0D0D0`,
      `#E6E6E6`,
      `#F0F0F0`,
      `#F5F5F5`,
      `#1D1D1D`,
      `#D8D8D8`,
      `#DBDADA`,
      `#EEEDEC`,
    ],
    light: [`#FFFFFF`],
    success: `#52C41A`,
    warning: `#FAAD14`,
    error: `#FF4D4F`,
    info: `#1890FF`,
  }

  const fontSizes: Array<number> = [13, 14, 16, 17, 18, 19, 20, 22, 24, 32, 42]
  const space: Array<number | string> = [
    0,
    4,
    8,
    16,
    24,
    32,
    64,
    `1rem`,
    `1.5rem`,
    `2rem`,
    `2.5rem`,
    `3rem`,
    `3.5rem`,
  ]
  const breakpoints: Array<string> = [`481px`, `767px`, `1023px`, `1919px`]

  // 0: light, 1: regular, 2: medium, 3: bold
  const fontWeights: Array<number> = [300, 400, 500, 700, 900]

  const shadows = {
    noShadow: `0px 0px 0px 0px ${colors.light[0]}`,
    gray: `0px 0px 20px 0px ${colors.grey[8]}`,
    container: `0px 2px 6px 0px ${colors.grey[9]}`,
    calling: `0 -5px 10px -5px ${colors.grey[3]}`,
  }

  const bordersColors = [`1px solid ${colors.info}`]

  return {
    colors,
    fontSizes,
    space,
    sizes: space,
    radii: space,
    breakpoints,
    fontWeights,
    bordersColors,
    shadows,
    ...theme,
  }
}
