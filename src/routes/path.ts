function path(root: string, sublink: string) {
  return `${root}${sublink}`
}
const ROOTS_HOME = '/dashboard'
const ROOTS_AUTH = '/auth'

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, '/login'),
  register: path(ROOTS_AUTH, '/register'),
  resetPassword: path(ROOTS_AUTH, '/reset'),
}

export const APP_PATHS = {
  root: ROOTS_HOME,
}

export const PATH_DASHBOARD = {
  root: ROOTS_HOME,
  general: {
    todo: path(ROOTS_HOME, '/todo'),
  },
}
