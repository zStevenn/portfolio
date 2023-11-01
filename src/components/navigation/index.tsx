import NavContextProvider from "@/hooks/context/useNavContext"
import Blur from "./blur"
import NavTop from "./nav-top"
import NavLinks from "./nav-links"
import NavButtons from "./nav-buttons"
import NavContainer from "./nav-container"

function Navigation() {
  return (
    <NavContextProvider>
      <NavContainer>
        <NavTop />
        <NavLinks />
        <NavButtons />
      </NavContainer>
      <Blur />
    </NavContextProvider>
  )
}

export default Navigation