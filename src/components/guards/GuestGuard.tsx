import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

import { APP_PATHS } from '@routes/path'

import useAuth from '@hooks/useAuth'

type GuestGuardProps = {
  children: ReactNode
}
const GuestGuard: React.FC<GuestGuardProps> = ({ children }: GuestGuardProps) => {
  const { isAuthenticated } = useAuth()
  if (isAuthenticated) {
    return <Navigate to={APP_PATHS.root} replace={true} />
  }
  return <>{children}</>
}

export default GuestGuard
