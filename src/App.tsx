import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '@src/pui-theme/themes'
import NotistackProvider from '@src/components/notistackProvider/NotistackProvider'
import router from './routes'

const App: React.FC = () => {
  return (
    <ThemeProvider  >
      <NotistackProvider>
        <RouterProvider router={router} />
      </NotistackProvider>
    </ThemeProvider>
  )
}

export default App
