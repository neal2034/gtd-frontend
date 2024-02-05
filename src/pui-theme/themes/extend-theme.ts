import { CssVarsTheme, experimental_extendTheme as mui_extendTheme, Theme } from '@mui/material/styles'
import { deepmerge } from '@mui/utils'
import { baseTheme, generateDefaultThemeOptions } from './phoenix-theme'

export default function extendTheme(options: any, ...args: any): Omit<Theme, 'palette'> & CssVarsTheme {
  return mui_extendTheme(deepmerge(generateDefaultThemeOptions(baseTheme) as Theme, options), ...args)
}
