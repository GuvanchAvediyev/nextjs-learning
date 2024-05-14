import { PropsWithChildren } from "react";
import { Open_Sans } from 'next/font/google'
import { Header } from "@/components/common/header/Header";
import { Footer } from "@/components/common/Footer";

const OPEN_SANS = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
})

export const MainLayout = ({ children }:PropsWithChildren) => {
  return(
    <div className={`flex flex-col w-full h-full bg-mainBackground ${OPEN_SANS.className} font-sans`}>
      <Header/>
      <div className='flex flex-col flex-1 h-full'>
        {children}
      </div>
      <Footer/>
    </div>
  )
}
