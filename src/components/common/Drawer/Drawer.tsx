import { FC, PropsWithChildren } from 'react'
import classNames from 'classnames'

type Props= {
  open: boolean
}

export const Drawer:FC< PropsWithChildren<Props> >=({open, children})=>{
  return(
    <div
      className={classNames(
        'absolute bg-mainBackground left-0 py-5 px-4 transition-opacity delay-300',
        'md:hidden',
        {
          'z-0 opacity-0 invisible translate-x-full h-0 w-0': !open,
          'z-20 opacity-1 visible translate-x-0 h-[calc(100vh-60px)] top-[calc(0%+60px)] w-full': open,
        }
      )
      }
    >
      {children}
    </div>
  )
}
