import { useContext } from 'react'
import { AuthContext } from '@contexts/JwtContext'
import { JwtContextType } from 'src/typing/auth'

const useAuth = (): JwtContextType => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('Auth context must be use inside AuthProvider')
  return context
}

export default useAuth
