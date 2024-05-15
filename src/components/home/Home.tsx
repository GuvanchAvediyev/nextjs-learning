import classNames from "classnames";
import { Card } from "@/components/home/components/Card";
import { useTopStoriesQuery } from "@/api/nytimes/queries";
import { getNYTHref } from "@/utils/getNYTHref";
import { IMAGE_TYPE } from "@/components/home/constants";

export const Home=()=>{
  const { data }= useTopStoriesQuery()

  if(!data){
    return <></>
  }

  return(
    <div className={classNames(
      'flex flex-col gap-5 py-5',
      'md:py-10 md:px-30'
    )}>
      {
        data.map(({multimedia, published_date, title, section, abstract,uri })=>
          <Card
            key={title}
            multimedia={multimedia}
            category={section}
            date={published_date}
            title={title}
            description={abstract}
            href={getNYTHref(uri)}
            src={multimedia.find(({type})=>type===IMAGE_TYPE)?.url}
          />
        )
      }
    </div>
  )
}
