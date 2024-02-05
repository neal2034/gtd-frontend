export type APIResponse<T = Record<string, unknown>> = {
  status: number
  data: T
  msg: 'success' | 'error'
}
