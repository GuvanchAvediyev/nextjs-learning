import React, {FC} from "react";
import classNames from "classnames";
import {formatDate} from "@/utils/date";

type Props = {
  category:string
  date:string
}

export const ArticleHeader:FC<Props>=({date, category})=>{
  return (
    <div className={classNames(
      'flex items-center gap-5 mb-10 px-4 mt-2',
      'md:justify-between p-0 mt-0'
    )}>
      <p className="text-base/[18px] rounded font-semibold text-mainBackground bg-main px-2 py-1">{category}</p>

      <p className='text-sm text-dark text-normal'>
        {formatDate(date)}
      </p>
    </div>
  )
}
