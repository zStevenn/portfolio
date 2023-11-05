import NavContextProvider from "@/hooks/context/useNavContext"
import Blur from "./blur"
import NavContainer from "./nav-container"
import ToggleNav from "./toggle-nav"
import Logo from "./logo"
import MobileContent from "./mobile-content"
import Links from "./links"
import Buttons from "./buttons"

function Navigation() {

  return (
    <NavContextProvider>
      <NavContainer>
        {/* Nav Top */}
        <div className="flex justify-between">
          <ToggleNav className='md:hidden' />
          <Logo />
        </div>

        {/* Nav Content */}
        <Links className="hidden md:flex" />
        <Buttons className="hidden md:flex md:items-center md:gap-4" />
        <MobileContent />
      </NavContainer>
      <Blur />
    </NavContextProvider >
  )
}

export default Navigation