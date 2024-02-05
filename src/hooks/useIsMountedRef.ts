import { useRef, useEffect } from 'react'

// ----------------------------------------------------------------------

export default function useIsMountedRef() {
  const isMounted = useRef(true)

  useEffect(() => {
    isMounted.current = true
    return () => {
      isMounted.current = false
    }
  }, [])

  return isMounted
}
