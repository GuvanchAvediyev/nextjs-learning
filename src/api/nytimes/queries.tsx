import {QueryClient, useQuery} from "@tanstack/react-query";
import {getTopStories} from "@/api/nytimes/module";

export enum queryKeys{
  TOP_STORIES
}

export async function prefetchTopStories(){
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: [queryKeys.TOP_STORIES],
    queryFn: getTopStories,
  })

  return queryClient
}


export function useTopStoriesQuery(){
  return useQuery(
    {
    queryKey: [queryKeys.TOP_STORIES],
    queryFn: getTopStories
  })
}
