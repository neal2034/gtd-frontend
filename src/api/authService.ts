import { APIResponse } from '@src/typing/api'
import { request } from './request'

export async function login(username: string, password: string): Promise<APIResponse> {
  return request.post('/auth/login/', { username, password })
}

export async function register(username: string, password: string) {
  return request.post('/auth/register/', { username, password })
}
