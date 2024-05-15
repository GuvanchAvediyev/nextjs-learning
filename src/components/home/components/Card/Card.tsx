import React, { FC } from 'react'
import Image from 'next/image'
import classNames from 'classnames'
import Link from "next/link";
import { formatDate } from "@/utils/date";

type Props={
  category:string
  date:string
  title:string
  description:string
  href:string
  src?:string
}

export const Card:FC<Props>=({ category, title , description, date, src, href})=>{
  return (
    <div className={classNames(
      'grid grid-cols-1 max-h-auto relative group',
      'md:grid-cols-2 md:max-h-115'
    )}>

      <Link href={href} className='absolute w-full h-full z-1 block top-0 left-0'/>
      <div className={classNames(
        'py-5 px-4 rounded-box-shadow flex justify-between flex-col',
        'group-hover:bg-deepWhite',
        'md:p-10'
      )}>
        <div>
          <div className={classNames(
            'flex items-center justify-between mb-5'
          )}>
            <p className="text-base/[18px] rounded font-semibold text-mainBackground bg-main px-2 py-1">{category}</p>

            <p className={classNames(
              'text-sm text-dark text-normal',
              'md:hidden'
            )}>
              {formatDate(date)}
            </p>
          </div>

          <p className="text-xl font-semibold text-dark mb-4">{title}</p>
          <p className='text-base text-dark text-normal'>{description}</p>

        </div>
        <p className={classNames(
          'text-sm text-dark text-normal hidden',
          'md:inline'
        )}>
          {formatDate(date)}
        </p>
      </div>
      {
        src && (
          <Image quality={50} className={classNames(
            'object-cover w-full object-center',
            'md:h-115',

          )} src={src} alt={title} width={612} height={458}/>
        )
      }
    </div>
  )
}
