import Logo from './logo'
import ToggleNav from './toggle-nav'

function NavTop() {
  return (
    <div className='flex justify-between'>
      <ToggleNav className='md:hidden' />
      <Logo />
    </div>
  )
}

export default NavTop