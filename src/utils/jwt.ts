import { TOKEN, REFRESH_TOKEN } from '@constants/storage'
import jwtDecode from 'jwt-decode'

export function isValidToken(accessToken: string) {
  if (!accessToken) {
    return false
  }
  const decoded = jwtDecode<{ exp: number }>(accessToken)
  const currentTime = Date.now() / 1000

  return decoded.exp > currentTime
}

export function setToken(token: string | null) {
  if (token) {
    localStorage.setItem(TOKEN, token)
  } else {
    localStorage.removeItem(TOKEN)
  }
}

export function setRefreshToken(refreshToken: string | null) {
  if (refreshToken) {
    localStorage.setItem(REFRESH_TOKEN, refreshToken)
  } else {
    localStorage.removeItem(REFRESH_TOKEN)
  }
}

export function getToken(): string | null {
  return localStorage.getItem(TOKEN)
}

export function getRefreshToken(): string | null {
  return localStorage.getItem(REFRESH_TOKEN)
}
