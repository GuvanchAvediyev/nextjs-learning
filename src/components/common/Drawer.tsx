import { FC, PropsWithChildren } from 'react'
import classNames from 'classnames'

type Props= {
  open: boolean
} & PropsWithChildren

export const Drawer:FC<Props>=({open, children})=>{
  return(
    <div
      className={classNames(
        'absolute bg-mainBackground left-0 w-full py-5 px-4 transition-all delay-300 h-[calc(100vh-60px)] top-[calc(0%+60px)]',
        'md:hidden',
        {
          'z-0 opacity-0 invisible translate-x-full': !open,
          'z-1 opacity-1 visible translate-x-0': open,
        }
      )
      }
    >
      {children}
    </div>
  )
}
