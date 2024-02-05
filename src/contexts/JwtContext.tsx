import { ReactNode, createContext, useEffect, useState } from 'react'
import { login as authLogin } from '@api/authService'
import { getToken, isValidToken, setRefreshToken, setToken } from '@utils/jwt'
import { JwtContextType } from '@src/typing/auth'
import md5 from 'md5'

const AuthContext = createContext<JwtContextType | null>(null)

type AuthProviderProps = {
  children: ReactNode
}
const AuthProvider: React.FC<AuthProviderProps> = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  useEffect(() => {
    const accessToken = getToken()
    const isAuth = !!accessToken && isValidToken(accessToken)
    setIsAuthenticated(isAuth)
  }, [])

  const login = async (username: string, password: string) => {
    const response = await authLogin(username, md5(password))
    if (response.status === 0) {
      setToken(response.data.token as string)
      setRefreshToken(response.data.refreshToken as string)
      setIsAuthenticated(true)
    }
    return response.status
  }

  const logout = async () => {
    setToken(null)
    setRefreshToken(null)
    setIsAuthenticated(false)
  }

  return <AuthContext.Provider value={{ isAuthenticated, login, logout }}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
