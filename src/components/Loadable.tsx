import { ElementType, Suspense } from 'react'
import LoadingScreen from './LoadingScreen'

export const Loadable = (Component: ElementType) => (props: any) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  )
}
