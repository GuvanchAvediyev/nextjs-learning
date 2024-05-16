import Image from 'next/image'
import {useRouter} from "next/router";
import classNames from "classnames";
import { ArticleHeader } from "@/components/article/components/ArticleHeader/ArticleHeader";
import { ArticleContent } from "@/components/article/components/ArticleContent/ArticleContent";
import { IMAGE_TYPE } from "@/components/home/constants";
import { useArticleQuery } from "@/api/nytimes/queries";

export const Article=()=>{
  const { data, isLoading} = useArticleQuery(useRouter().query.article as string)

  if(!data && !isLoading){
    return (
      <div className='flex items-center justify-center h-screen'>
        <h1>By this Article Nothing was found</h1>
      </div>
    )
  }

  if (!data || isLoading) {
    return <></>
  }

  const { abstract, published_date, title, section, multimedia, byline }=data
  const  imageSrc=multimedia?.find(({type})=>type===IMAGE_TYPE)?.url


  return(
    <div className={classNames(
      'flex flex-col py-10',
      'md:py-10 md:px-45'
    )}>
      <ArticleHeader date={published_date} category={section} />
      {imageSrc &&
        <Image
        fetchPriority='high'
        width={1000}
        height={460}
        quality={75}
        src={imageSrc}
        alt={section}
        className={classNames(
          'object-cover w-full object-center h-115',
          'md:rounded-md md:rounded-box-shadow'
        )}
      />}
      <ArticleContent subtitle={byline} title={title} description={abstract}/>
    </div>
  )
}
