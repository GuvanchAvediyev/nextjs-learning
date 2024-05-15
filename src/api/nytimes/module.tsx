import {apiClient} from "@/helpers/apiClient";
import {TTopStory} from "@/api/nytimes/types";

export async function getTopStories(){
  try {
    const response = await apiClient<{results:TTopStory[]}>('home.json')

    return response.results

  }catch (error:any){
    throw new Error(error.message)
  }
}
