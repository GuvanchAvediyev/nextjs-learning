import {FC} from "react";
import classNames from "classnames";

type Props={
  title:string,
  subtitle:string,
  description:string
}

export const ArticleContent:FC<Props>=({title, subtitle, description})=>{
  return(
    <div className={classNames(
      'mt-5 px-4',
      'md:px-0'
    )}>
      <h1 className='font-3xl font-semibold text-dark mb-4'>{title}</h1>
      <p className='text-base font-normal text-dark mb-10 italic'>{subtitle}</p>
      <p className='text-base font-normal text-dark'>{description}</p>
    </div>
  )
}

