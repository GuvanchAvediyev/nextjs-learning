import { useState } from 'react'
import classNames from 'classnames'
import Link from 'next/link'
import { DesktopNavbar } from '@/components/common/header/components/DesktopNavbar'
import { Drawer } from '@/components/common/Drawer'
import { CustomLink } from '@/components/common/CustomLink'
import Logo from '@/assets/icons/logo.svg'
import CrossIcon from '@/assets/icons/cross.svg'
import BurgerIcon from '@/assets/icons/burger.svg'


export const Header=()=>{
  const [isOpenModal, setIsOpenModal] = useState(false)

  const toggleMenu=()=>setIsOpenModal(prevState => !prevState)

  return(
    <>
    <header className={classNames(
      'bottom-box-shadow flex justify-between items-center p-4 relative z-10',
      'md:px-20 md:py-0'
    )}>

      <Link href='/'>
        <Logo />
      </Link>

      <button
        onClick={toggleMenu}
        className={classNames(
          'block',
          'md:hidden'
        )}
      >
        {isOpenModal ? <CrossIcon /> : <BurgerIcon />}
      </button>

      <DesktopNavbar />
    </header>
      <Drawer open={isOpenModal}>
        <div className='flex flex-col gap-y-5'>
          <CustomLink customClass='pb-1' href='/'>Home</CustomLink>
          <CustomLink customClass='pb-1' href='/world'>World</CustomLink>
          <CustomLink customClass='pb-1' href='/automobiles'>Automobiles</CustomLink>
          <CustomLink customClass='pb-1' href='/real-estate'>Real Estates</CustomLink>
          <CustomLink customClass='pb-1' href='/finance'>Finance</CustomLink>
        </div>
      </Drawer>
    </>
  )
}