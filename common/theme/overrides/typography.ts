/* eslint-disable quotes */

declare module '@mui/material/styles' {
  interface TypographyVariants {
    transition: React.CSSProperties
    subtitle3: React.CSSProperties
    subtitle4: React.CSSProperties
  }
  interface TypographyVariantsOptions {
    transition?: React.CSSProperties
    subtitle3?: React.CSSProperties
    subtitle4?: React.CSSProperties
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    transition: true
    subtitle3: true
    subtitle4: true
  }
}
const typography = {
  MuiTypography: {
    variants: [
      {
        props: {
          variant: `transition`,
        },
      },
    ],
  },
}
export default typography
