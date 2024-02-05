import { useCallback, useState } from 'react'

export interface DialogStates {
  visible: boolean
  open: VoidFunction
  close: VoidFunction
}
export function useDialog(initialValue = false): DialogStates {
  const [visible, setVisible] = useState(initialValue)
  const open = useCallback(() => {
    setVisible(true)
  }, [setVisible])
  const close = useCallback(() => {
    setVisible(false)
  }, [setVisible])
  return { visible, open, close }
}
