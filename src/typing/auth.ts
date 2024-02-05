export type JwtContextType = {
  isAuthenticated: boolean
  login: (username: string, password: string) => Promise<number>
  logout: () => Promise<void>
}

export type AuthUser = null | Record<string, any>
