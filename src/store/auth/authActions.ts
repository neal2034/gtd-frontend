import { authService } from '@src/api'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const register = createAsyncThunk(
  'register',
  async (payload: { username: string; password: string; }) => {
    return await authService.register(payload.username, payload.password)
  },
)
