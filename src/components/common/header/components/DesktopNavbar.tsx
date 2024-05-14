import classNames from 'classnames'
import { CustomLink } from '@/components/common/CustomLink'

export const DesktopNavbar=()=>{
  return(
    <div className={classNames(
      'hidden',
      'md:flex items-center gap-8'
    )}>
      <CustomLink customClass='py-4.5' href='/'>Home</CustomLink>
      <CustomLink customClass='py-4.5' href='/world'>World</CustomLink>
      <CustomLink customClass='py-4.5' href='/automobiles'>Automobiles</CustomLink>
      <CustomLink customClass='py-4.5' href='/real-estate'>Real Estates</CustomLink>
      <CustomLink customClass='py-4.5' href='/finance'>Finance</CustomLink>
    </div>
  )
}
