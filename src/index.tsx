import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider as ReduxProvider } from 'react-redux'
import { AuthProvider } from '@contexts/JwtContext'
import { HelmetProvider } from 'react-helmet-async'

import App from './App'
import store from './store/store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <ReduxProvider store={store}>

          <App />

        </ReduxProvider>
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
