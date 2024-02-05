import { Theme } from '@mui/material/styles'

// ----------------------------------------------------------------------

export default function Table(theme: Theme) {
  return {
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: 'var(--phoenix-palette-action-selected)',
            '&:hover': {
              backgroundColor: 'var(--phoenix-palette-action-hover)',
            },
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: 'none',
        },
        head: {
          color: 'var(--phoenix-palette-text-secondary)',
          backgroundColor: 'var(--phoenix-palette-background-neutral)',
          '&:first-of-type': {
            paddingLeft: theme.spacing(3),
            borderTopLeftRadius: theme.shape.borderRadius,
            borderBottomLeftRadius: theme.shape.borderRadius,
            boxShadow: `inset 8px 0 0  var(--phoenix-palette-background-paper)`,
          },
          '&:last-of-type': {
            paddingRight: theme.spacing(3),
            borderTopRightRadius: theme.shape.borderRadius,
            borderBottomRightRadius: theme.shape.borderRadius,
            boxShadow: `inset -8px 0 0 var(--phoenix-palette-background-paper)`,
          },
        },
        stickyHeader: {
          backgroundColor: 'var(--phoenix-palette-background-paper)',
          backgroundImage: `linear-gradient(to bottom, var(--phoenix-palette-background-neutral) 0%, var(--phoenix-palette-background-neutral) 100%)`,
        },
        body: {
          '&:first-of-type': {
            paddingLeft: theme.spacing(3),
          },
          '&:last-of-type': {
            paddingRight: theme.spacing(3),
          },
        },
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        root: {
          borderTop: `solid 1px var(--phoenix-palette-divider)`,
        },
        toolbar: {
          height: 64,
        },
        select: {
          '&:focus': {
            borderRadius: theme.shape.borderRadius,
          },
        },
        selectIcon: {
          width: 20,
          height: 20,
          marginTop: -4,
        },
      },
    },
  }
}
