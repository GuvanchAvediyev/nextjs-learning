import { useEffect } from "react";

export function useBodyScrollLock(isLock: boolean, position: 'X'|'Y') {

  const PREPARED_OVERFLOW = `overflow${position ?? ''}` as any

  useEffect(() => {
    document.body.style[PREPARED_OVERFLOW] = isLock ? 'hidden' : 'visible'

    return () => {
      document.body.style[PREPARED_OVERFLOW] = 'visible'
    }
  }, [PREPARED_OVERFLOW, isLock])
}
