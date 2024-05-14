import Link from 'next/link'
import classNames from 'classnames'
import TwitterIcon from '@/assets/icons/twitter.svg'
import FacebookIcon from '@/assets/icons/facebook.svg'
import InstagramIcon from '@/assets/icons/instagram.svg'

export const Footer=()=>{
 return(
   <footer className={classNames(
     'flex flex-col w-full p-4 pt-5 gap-5',
     'md:px-20'
   )}>
     <div className='border-t border-solid border-separator w-full' />
     <div className={classNames(
       'flex flex-col w-full items-center gap-8',
       'md:flex-row md:justify-between'
     )}>

       <div className={classNames(
         'flex flex-row order-2 gap-8',
         'md:order-3'
       )}>
         <Link
           className='text-regalGray hover:text-dark'
           href='https://twitter.com/home'
           passHref
           target='_blank'
         >
           <TwitterIcon className={classNames(
             'w-10 h-10',
             'md:w-6 md:h-6'
           )} />
         </Link>
         <Link
           className='text-regalGray hover:text-dark'
           href='https://www.facebook.com/'
           passHref
           target='_blank'
         >
           <FacebookIcon className={classNames(
             'w-10 h-10',
             'md:w-6 md:h-6'
           )} />
         </Link>
         <Link
           className='text-regalGray hover:text-dark'
           href='https://www.instagram.com/'
           passHref
           target='_blank'
         >
           <InstagramIcon className={classNames(
             'w-10 h-10',
             'md:w-6 md:h-6'
           )} />
         </Link>
       </div>

       <div className={classNames(
         'flex flex-col items-center gap-5 order-1',
         'md:order-2 md:flex-row'
       )}>
         <Link className='text-base text-regalGray hover:text-dark' href='/about-us'>About us</Link>
         <Link className='text-base text-regalGray hover:text-dark' href='/help'>Help</Link>
         <Link className='text-base text-regalGray hover:text-dark' href='/privasy-policy'>Privacy Policy</Link>
         <Link className='text-base text-regalGray hover:text-dark' href='/terms'>Terms of Service</Link>
       </div>

       <p className={classNames(
         'order-3 text-base text-regalGray',
         'md:order-1'
       )}>
         © 2022 Best News
       </p>
     </div>
   </footer>
 )
}
