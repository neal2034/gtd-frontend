import { Navigate, createBrowserRouter } from 'react-router-dom'
import GuestGuard from '@components/guards/GuestGuard'
import AuthGuard from '@components/guards/AuthGuard'
import MainLayout from '@components/layouts/main'
import { PATH_AFTER_LOGIN } from '@config/appConfig'
import { lazy } from 'react'
import { Loadable } from '@src/components/Loadable'

const Login = Loadable(lazy(() => import('@pages/Login')))
const Todo = Loadable(lazy(() => import('@pages/Todo')))

const router = createBrowserRouter([
  {
    path: '/auth',
    children: [
      {
        path: 'login',
        element: (
          <GuestGuard>
            <Login />
          </GuestGuard>
        ),
      },
    ],
  },
  {
    path: 'dashboard',
    element: (
      <AuthGuard loginComponent={Login}>
        <MainLayout />
      </AuthGuard>
    ),
    children: [
      {
        index: true,
        element: <Navigate to={PATH_AFTER_LOGIN} replace />,
      },
      { path: 'todo', element: <Todo /> }
    ],
  },
  {
    path: '/',
    element: <Navigate to={'/auth/login/'} />,
  },
])

export default router
