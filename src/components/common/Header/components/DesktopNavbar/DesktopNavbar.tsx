import classNames from 'classnames'
import { CustomLink } from '@/components/common/CustomLink/CustomLink'

export const DesktopNavbar=()=>{
  return(
    <div className={classNames(
      'hidden',
      'md:flex items-center gap-8'
    )}>
      <CustomLink className='py-4.5' href='/'>Home</CustomLink>
      <CustomLink className='py-4.5' href='/world'>World</CustomLink>
      <CustomLink className='py-4.5' href='/automobiles'>Automobiles</CustomLink>
      <CustomLink className='py-4.5' href='/real-estate'>Real Estates</CustomLink>
      <CustomLink className='py-4.5' href='/finance'>Finance</CustomLink>
    </div>
  )
}
