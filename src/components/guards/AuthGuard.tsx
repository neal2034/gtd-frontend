import useAuth from '@hooks/useAuth'
import { ReactNode, useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

type AuthGuardProps = {
  loginComponent: React.FC
  children: ReactNode
}
const AuthGuard: React.FC<AuthGuardProps> = ({ children, loginComponent: Login }: AuthGuardProps) => {
  const { isAuthenticated } = useAuth()
  const { pathname } = useLocation()
  const [requestLocation, setRequestLocation] = useState<string | null>(null)

  if (!isAuthenticated) {
    if (pathname !== requestLocation) {
      setRequestLocation(pathname)
    }
    return <Login />
  } else if (requestLocation && requestLocation !== pathname) {
    setRequestLocation(null)
    return <Navigate to={requestLocation} />
  }

  return <>{children}</>
}

export default AuthGuard
