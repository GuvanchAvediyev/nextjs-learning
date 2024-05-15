import { apiClient } from "@/helpers/apiClient";
import { TopStory } from "@/api/nytimes/types";
import { BaseResponse } from "@/api/common/type";

export async function getTopStories(){
  try {
    const response = await apiClient<BaseResponse<TopStory[]>>('home.json')

    return response.results

  }catch (error:any){
    throw new Error(error.message)
  }
}
