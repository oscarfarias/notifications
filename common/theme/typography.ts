export function pxToRem(value: number): string {
  return `${value / 16}rem`
}

function responsiveFontSizes({
  sm,
  md,
  lg,
}: {
  sm: number
  md: number
  lg: number
}): Record<string, unknown> {
  return {
    '@media (min-width:600px)': {
      fontSize: pxToRem(sm),
    },
    '@media (min-width:900px)': {
      fontSize: pxToRem(md),
      lineHeight: 1.5,
    },
    '@media (min-width:1200px)': {
      fontSize: pxToRem(lg),
      lineHeight: 1.5,
    },
  }
}

const FONT_PRIMARY = `Roboto`

const typography = (color: string): Record<string, unknown> => ({
  fontFamily: FONT_PRIMARY,
  h1: {
    lineHeight: 1.167,
    fontSize: pxToRem(96),
    letterSpacing: pxToRem(-1.5),
    ...responsiveFontSizes({
      sm: 96,
      md: 96,
      lg: 96,
    }),
    '&>a': {
      color,
    },
  },
  h2: {
    lineHeight: 1.2,
    fontSize: pxToRem(60),
    letterSpacing: pxToRem(-0.5),
    ...responsiveFontSizes({
      sm: 60,
      md: 60,
      lg: 60,
    }),
    '&>a': {
      color,
    },
  },
  h3: {
    lineHeight: 1.167,
    fontSize: pxToRem(48),
    '&>a': {
      color,
    },
  },
  h4: {
    lineHeight: 1.235,
    fontSize: pxToRem(34),
    letterSpacing: pxToRem(0.5),
    '&>a': {
      color,
    },
  },
  h5: {
    lineHeight: 1.334,
    fontSize: pxToRem(24),
    '&>a': {
      color,
    },
  },
  h6: {
    lineHeight: 1.6,
    fontSize: pxToRem(20),
    letterSpacing: pxToRem(0.15),
    '&>a': {
      color,
    },
  },
  subtitle1: {
    lineHeight: 1.75,
    fontSize: pxToRem(16),
    letterSpacing: pxToRem(0.15),
    '&>a': {
      color,
    },
  },
  subtitle2: {
    lineHeight: 1.57,
    fontSize: pxToRem(14),
    letterSpacing: pxToRem(0.1),
    '&>a': {
      color,
    },
  },
  subtitle3: {
    fontWeight: 400,
    lineHeight: `24px`,
    fontSize: pxToRem(16),
    letterSpacing: pxToRem(0.15),
    '&>a': {
      color,
    },
  },
  subtitle4: {
    fontWeight: 400,
    lineHeight: `12px`,
    fontSize: pxToRem(12),
    letterSpacing: pxToRem(0.15),
    '&>a': {
      color,
    },
  },
  body1: {
    lineHeight: 1.5,
    fontSize: pxToRem(16),
    letterSpacing: pxToRem(0.15),
    ...responsiveFontSizes({
      sm: 16,
      md: 16,
      lg: 16,
    }),
    '&>a': {
      color,
    },
  },
  body2: {
    lineHeight: 1.43,
    fontSize: pxToRem(14),
    letterSpacing: pxToRem(0.15),
    ...responsiveFontSizes({
      sm: 14,
      md: 14,
      lg: 14,
    }),
    '&>a': {
      color,
    },
  },
  caption: {
    lineHeight: 1.66,
    fontSize: pxToRem(12),
    letterSpacing: pxToRem(0.4),
    '&>a': {
      color,
    },
  },
  overline: {
    lineHeight: 2.66,
    fontSize: pxToRem(12),
    letterSpacing: pxToRem(0.1),
    '&>a': {
      color,
    },
  },
  button: {
    lineHeight: 1.75,
    fontSize: pxToRem(14),
    textTransform: `capitalize`,
    '&>a': {
      color,
    },
  },
  transition: {
    lineHeight: 1.75,
    fontSize: `13px`,
    fontWeight: `bold`,
    textTransform: `capitalize`,
    '&>a': {
      color,
    },
  },
})

export default typography
