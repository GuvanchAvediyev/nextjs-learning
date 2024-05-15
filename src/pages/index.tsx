import {dehydrate} from "@tanstack/react-query";
import { Home } from "@/components/home/Home";
import { prefetchTopStories } from "@/api/nytimes/queries";

export const getServerSideProps = async ()=>{
  const queryClient = await prefetchTopStories()

  return {
    props:{
      dehydratedState: dehydrate(queryClient)
    }
  }
}

export default function HomePage() {
  return (
   <Home/>
  )
}


