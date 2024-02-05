import { useTheme as useSystemTheme } from '@mui/system'
import { Theme } from '../types'
import defaultTheme from './phoenix-theme'

export const useTheme = <T = Theme>(): T => useSystemTheme<T>(defaultTheme as T)
