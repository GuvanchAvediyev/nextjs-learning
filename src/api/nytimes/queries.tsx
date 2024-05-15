import { useQuery } from "@tanstack/react-query";
import { getTopStories } from "@/api/nytimes/module";
import { queryClient } from "@/constants/query-client";

enum QueryKeys{
  TOP_STORIES
}

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
