import { FC, PropsWithChildren } from 'react'
import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import classNames from 'classnames'

type Props = {
  className?: string
}

export const CustomLink:FC<PropsWithChildren<Props> & LinkProps >=({children, href, className, ...rest})=>{
  const pathname = usePathname();
  const active = href === '/' ? pathname === href : pathname.startsWith(href as string)

  return(
    <Link
      className={
        classNames(
          'text-base relative text-regalGray w-max',
          'hover:text-dark',
          className,
          {
            'before:absolute before:bottom-0 before:border-b-4 before:border-solid before:border-main before:h-1 before:w-full': active
          }
        )
      }

      href={href}
      {...rest}
    >
      {children}
    </Link>
  )
}
