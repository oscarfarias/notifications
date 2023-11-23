import PropTypes from 'prop-types'
// material
import { CssBaseline } from '@mui/material'
import {
  createTheme,
  ThemeProvider,
  StyledEngineProvider,
} from '@mui/material/styles'

import shape from './shape'
import palette from './palette'
import typography from './typography'
import breakpoints from './breakpoints'
import componentsOverride from './overrides'
import shadows, { customShadows } from './shadows'
import gradients from './gradients'
ThemeConfig.propTypes = {
  children: PropTypes.node,
}

export default function ThemeConfig({
  children,
}: {
  children: JSX.Element
}): JSX.Element {
  const themeOptions = {
    palette: { ...palette.light },
    shape,
    typography: typography(palette.light.primary.main),
    breakpoints,
    shadows: shadows.light,
    customShadows: customShadows.light,
    gradients,
  }

  const theme = createTheme(themeOptions)
  theme.components = componentsOverride()

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  )
}
