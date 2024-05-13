import {PropsWithChildren} from "react";
import {Header} from "@/components/common/Header";
import {Footer} from "@/components/common/Footer";

export const MainLayout = ({ children }:PropsWithChildren) => {
  return(
    <div>
      <Header/>
      {children}
      <Footer/>
    </div>
  )
}
