import {FC, PropsWithChildren} from "react";
import { Open_Sans } from 'next/font/google'
import { Footer } from "@/components/common/Footer/Footer";
import { Header } from "@/components/common/Header/Header";

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
})

export const MainLayout:FC<PropsWithChildren> = ({ children }) => {
  return(
    <div className={`flex flex-col w-full h-full overflow-auto bg-mainBackground ${openSans.className} font-sans`}>
      <Header/>
      <div className='flex flex-col flex-1 h-full'>
        {children}
      </div>
      <Footer/>
    </div>
  )
}
