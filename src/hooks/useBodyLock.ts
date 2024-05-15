import { useEffect } from "react";

export function useBodyScrollLock(isLock: boolean, position: 'X'|'Y') {
  const preparedOverflow = `overflow${position ?? ''}` as any

  useEffect(() => {
    document.body.style[preparedOverflow] = isLock ? 'hidden' : 'visible'

    return () => {
      document.body.style[preparedOverflow] = 'visible'
    }
  }, [preparedOverflow, isLock])
}
