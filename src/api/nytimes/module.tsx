import { apiClient } from "@/helpers/apiClient";
import { TopStory } from "@/api/nytimes/types";
import { BaseResponse } from "@/api/common/type";
import {getNYTHref} from "@/helpers/links";

export async function getTopStories(){
  try {
    const response = await apiClient<BaseResponse<TopStory[]>>('/topstories/v2/home.json?')

    return response.results

  }catch (error:any){
    throw new Error(error.message)
  }
}


export async function getArticle(article?:string){
  try {
    const response = await apiClient<BaseResponse<TopStory[]>>('/topstories/v2/home.json?')

    const foundArticle = response.results.find(({url})=>{
      return getNYTHref(url).preparedUrl === article
    })

    if(!foundArticle){
      throw new Error('Something went wrong!');
    }

    return foundArticle

  }catch (error:any){
    throw new Error(error.message)
  }
}
