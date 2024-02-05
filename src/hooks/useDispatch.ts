import { useDispatch as useReduxDispatch } from 'react-redux'
import { AppDispatch } from '@src/store/store'

function useDispatch(): AppDispatch {
  const dispatch: AppDispatch = useReduxDispatch()

  return dispatch
}

export default useDispatch
