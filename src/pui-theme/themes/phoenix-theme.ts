import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
import { RecursivePartial, Theme } from '../types'
import palette from './primitives/palette'
import typography from './primitives/typography'
import shadows, { customShadows } from './primitives/shadow'
import breakpoints from './primitives/breakpoints'
import ComponentsOverrides from './primitives/overrides'

export const baseTheme: Theme = extendTheme()
export const generateDefaultThemeOptions = (baseTheme: Theme): RecursivePartial<Theme> => ({
  colorSchemes: {
    dark: {
      palette: { ...palette.dark },
    },
    light: {
      palette: {
        ...palette.light,
      },
    },
  },
  shadows: shadows.light, //TODO 应该加入参数以选择dark mode
  shape: { borderRadius: 8 },
  customShadows: customShadows.light,
  typography: { ...typography },
  cssVarPrefix: 'phoenix',
  breakpoints: { ...breakpoints },
  spacing: baseTheme.spacing,
})

const theme = generateDefaultThemeOptions(baseTheme) as Theme
theme.components = ComponentsOverrides(theme)
const defaultTheme: Theme = extendTheme(theme)

export default defaultTheme
