import { useEffect, useState } from 'react'

export default function useOffSetTop(top?: number) {
  const [offsetTop, setOffsetTop] = useState(false)
  const isTop = top || 100
  useEffect(() => {
    window.onscroll = () => {
      setOffsetTop(window.pageYOffset > isTop)
      return () => {
        window.onscroll = null
      }
    }
  }, [isTop])
  return offsetTop
}
