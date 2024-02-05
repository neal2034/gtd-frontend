import { CssVarsTheme, Theme as MuiTheme } from '@mui/material/styles'

interface CustomTheme {
  // TODO  需要扩展
  occupy?: any
}

export type Theme = Omit<MuiTheme, 'palette'> & CssVarsTheme & CustomTheme
