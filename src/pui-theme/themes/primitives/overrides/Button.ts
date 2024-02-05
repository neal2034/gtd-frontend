import { Theme } from '@mui/material/styles'

// ----------------------------------------------------------------------

export default function Button(theme: Theme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            boxShadow: 'none',
            backgroundColor: 'var(--phoenix-palette-grey-400)',
          },
        },
        sizeLarge: {
          height: 48,
        },
        // contained
        containedInherit: {
          color: 'var(--phoenix-palette-grey-800)',
          boxShadow: theme.customShadows.z8,
          '&:hover': {
            backgroundColor: 'var(--phoenix-palette-grey-400)',
          },
        },
        containedPrimary: {
          boxShadow: theme.customShadows.primary,
        },
        containedSecondary: {
          boxShadow: theme.customShadows.secondary,
        },
        containedInfo: {
          boxShadow: theme.customShadows.info,
        },
        containedSuccess: {
          boxShadow: theme.customShadows.success,
        },
        containedWarning: {
          boxShadow: theme.customShadows.warning,
        },
        containedError: {
          boxShadow: theme.customShadows.error,
        },
        // outlined
        outlinedInherit: {
          border: `1px solid 'var(--phoenix-palette-grey-50032)',`,
          '&:hover': {
            backgroundColor: 'var(--phoenix-palette-action-hover)',
          },
        },
        textInherit: {
          '&:hover': {
            backgroundColor: 'var(--phoenix-palette-action-hover)',
          },
        },
      },
    },
  }
}
