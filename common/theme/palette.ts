/* eslint-disable quotes */
import { Roboto } from 'next/font/google'
import { PaletteMode, Theme } from '@mui/material'
interface CustomColors {
  lightWhite: string
  lightDark: string
  primaryDark: string
  snow: string
  linearCloud: string
  darkSnow: string
}
export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
})

declare module '@mui/styles/defaultTheme' {
  type DefaultTheme = Theme
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    flat: true
  }
}

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true
    sm: true
    md: true
    lg: true
    xl: true
    mobile: true
    tablet: true
    laptop: true
    desktop: true
  }
  interface Theme {
    gradients: string[]
  }
  interface Palette {
    custom: CustomColors
  }
  interface PaletteOptions {
    custom: CustomColors
  }
}

const primary = {
  main: `#E93B77`,
  dark: `#115293`,
  light: `#42A5F5`,
}

const secondary = {
  main: `#00D8BB`,
  contrastText: `#000`,
}
const common = {
  black: `#000219`,
  white: `#ffffff`,
}
const custom = {
  lightWhite: `#F0F2F5`,
  lightDark: `#7B809A`,
  primaryDark: `#344767`,
  snow: '#E9EAED',
  linearCloud: '#F8F9FA',
  darkSnow: '#C7CCD0',
}

const COMMON = {
  common,
  custom,
  primary: {
    ...primary,
  },
  secondary: {
    ...secondary,
  },
  text: {
    primary: common.white,
  },
}

const palette = {
  light: {
    ...COMMON,
    mode: 'light' as PaletteMode,
  },
}

export default palette
