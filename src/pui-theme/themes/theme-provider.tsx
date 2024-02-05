import { CssBaseline, StyledEngineProvider } from '@mui/material'
import { Experimental_CssVarsProvider as CssVarsProvider, SupportedColorScheme } from '@mui/material/styles'
import { CssVarsProviderConfig } from '@mui/system'
import { PropsWithChildren, ReactElement } from 'react'
import defaultTheme from './phoenix-theme'

export type ThemeProviderProps = Partial<CssVarsProviderConfig<SupportedColorScheme>> & {
  /**
   * The node used to attach the color-scheme attribute
   * @default document
   */
  colorSchemeNode?: Element | null | undefined
  theme?:
    | {
        colorSchemes: Record<SupportedColorScheme, Record<string, any>>
        cssVarPrefix?: string | undefined
      }
    | undefined
}

const ThemeProvider = (props: PropsWithChildren<ThemeProviderProps>): ReactElement => {
  const { children, theme, ...rest } = props
  return (
    <StyledEngineProvider injectFirst>
      <CssVarsProvider
        modeStorageKey='phoenix-mode'
        colorSchemeStorageKey='phoenix-color-scheme'
        theme={theme ?? defaultTheme}
        {...rest}
      >
        <CssBaseline />
        {children}
      </CssVarsProvider>
    </StyledEngineProvider>
  )
}

export default ThemeProvider
