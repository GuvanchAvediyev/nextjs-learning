import type { GetServerSideProps } from 'next'
import { dehydrate } from "@tanstack/react-query";
import { prefetchArticle } from "@/api/nytimes/queries";
import { Article } from "@/components/article/Article";

export const getServerSideProps:GetServerSideProps = async (context)=>{
  const article=context.params?.article as string

  if(!article){
    return {
      notFound:true
    }
  }
  const queryClient = await prefetchArticle(article)

  return {
    props:{
      dehydratedState: dehydrate(queryClient)
    }
  }
}


export default function ArticlePage(){
  return <Article/>
}

