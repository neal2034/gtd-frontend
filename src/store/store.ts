import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'
import todoSlice from './todo/todoSlice'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function createStore(preloadedState?: any) {
  return configureStore({
    reducer: {
      todo: todoSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    preloadedState,
    devTools: process.env.REACT_APP_SERVER_ENV !== 'production',
  })
}

const store = createStore()
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
export type AppDispatch = typeof store.dispatch
export type GetState = () => RootState

export default store
