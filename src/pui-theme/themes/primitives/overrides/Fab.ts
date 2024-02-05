import { Theme } from '@mui/material/styles'

// ----------------------------------------------------------------------

export default function Fab(theme: Theme) {
  return {
    MuiFab: {
      defaultProps: {
        color: 'primary',
      },

      styleOverrides: {
        root: {
          boxShadow: theme.customShadows.z8,
          '&:hover': {
            boxShadow: 'none',
            backgroundColor: 'var(--phoenix-palette-grey-400)',
          },
        },
        primary: {
          boxShadow: theme.customShadows.primary,
          '&:hover': {
            backgroundColor: 'var(--phoenix-palette-primary-dark)',
          },
        },
        secondary: {
          boxShadow: theme.customShadows.secondary,
          '&:hover': {
            backgroundColor: 'var(--phoenix-palette-secondary-dark)',
          },
        },
        extended: {
          '& svg': {
            marginRight: theme.spacing(1),
          },
        },
      },
    },
  }
}
