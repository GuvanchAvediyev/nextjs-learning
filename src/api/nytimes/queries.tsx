import { useQuery } from "@tanstack/react-query";
import {getArticle, getTopStories} from "@/api/nytimes/module";
import { queryClient } from "@/constants/query-client";

export enum QueryKeys{
  TOP_STORIES,
  ARTICLE
}

export const articleQueryKey=QueryKeys.ARTICLE

export async function prefetchTopStories(){
  await queryClient.prefetchQuery({
    queryKey: [QueryKeys.TOP_STORIES],
    queryFn: getTopStories,
  })

  return queryClient
}


export function useTopStoriesQuery(){
  return useQuery(
    {
    queryKey: [QueryKeys.TOP_STORIES],
    queryFn: getTopStories
  })
}

export async function prefetchArticle(article?:string){
  if (article) {
    try {
      await queryClient.prefetchQuery({
        queryKey: [QueryKeys.ARTICLE, article],
        queryFn: () => getArticle(article),
      });
    } catch (error) {
      throw error;
    }
  }

  return queryClient
}



export function useArticleQuery(article?: string){
  return useQuery(
    {
      queryKey: [QueryKeys.ARTICLE, article],
      queryFn: ()=> getArticle(article),
      enabled:!!article
    })
}
