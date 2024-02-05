import { PATH_DASHBOARD } from '@routes/path'

// LAYOUT
// ----------------------------------------------------------------------

export const HEADER = {
  MOBILE_HEIGHT: 64,
  MAIN_DESKTOP_HEIGHT: 88,
  DASHBOARD_DESKTOP_HEIGHT: 92,
  DASHBOARD_DESKTOP_OFFSET_HEIGHT: 92 - 32,
}

export const NAVBAR = {
  BASE_WIDTH: 260,
  DASHBOARD_WIDTH: 200,
  DASHBOARD_COLLAPSE_WIDTH: 88,
  //
  DASHBOARD_ITEM_ROOT_HEIGHT: 48,
  DASHBOARD_ITEM_SUB_HEIGHT: 40,
  DASHBOARD_ITEM_HORIZONTAL_HEIGHT: 32,
}

export const ICON = {
  NAVBAR_ITEM: 22,
  NAVBAR_ITEM_HORIZONTAL: 20,
}

export const defaultSetting = {
  themeMode: 'light',
  themeDirection: 'ltr',
  themeColorPresets: 'default',
  themeLayout: 'horizontal',
  themeStretch: false,
}

const config = {
  baseApiURL: `${process.env.REACT_APP_BASE_API_URL}`,
  defaultTimeout: 1000 * 30,
  defaultTokenExpries: 365,
}

export const PATH_AFTER_LOGIN = PATH_DASHBOARD.general.todo

export default config
