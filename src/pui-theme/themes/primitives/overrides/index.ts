import { Theme } from '@mui/material/styles'
//
import Table from './Table'
import Button from './Button'
import Select from './Select'
import Dialog from './Dialog'
import Fab from './Fab'
// import Tabs from './Tabs'
// import Chip from './Chip'

// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme: Theme) {
  return Object.assign(
    Fab(theme),
    // Tabs(theme),
    // Chip(theme),
    // Card(theme),
    // Menu(theme),
    // Link(theme),
    // Input(theme),
    // Radio(theme),
    // Badge(theme),
    // Lists(theme),
    Table(theme),
    // Paper(theme),
    // Alert(theme),
    // Switch(theme),
    Select(theme),
    Button(theme),
    // Rating(theme),
    Dialog(theme),
    // Avatar(theme),
    // Slider(theme),
    // Drawer(theme),
    // Stepper(theme),
    // Tooltip(theme),
    // Popover(theme),
    // SvgIcon(theme),
    // Checkbox(theme),
    // DataGrid(theme),
    // Skeleton(theme),
    // Timeline(theme),
    // TreeView(theme),
    // Backdrop(theme),
    // Progress(theme),
    // Accordion(theme),
    // Typography(theme),
    // Pagination(theme),
    // ButtonGroup(theme),
    // Breadcrumbs(theme),
    // CssBaseline(theme),
    // Autocomplete(theme),
    // ControlLabel(theme),
    // ToggleButton(theme),
    // LoadingButton(theme),
  )
}
