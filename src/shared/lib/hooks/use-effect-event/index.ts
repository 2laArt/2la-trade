import React from 'react'

export const useEffectEvent = (callback: Function) => {
  const ref = React.useRef(callback)
  ref.current = callback

  return React.useCallback((...arg: unknown[]) => ref.current(...arg), [])
}
