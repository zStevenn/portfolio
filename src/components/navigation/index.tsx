import NavContextProvider from "@/hooks/context/useNavContext"
import ToggleNav from "./toggle-nav"
import Blur from "./blur"

function Navigation() {
  return (
    <NavContextProvider>
      <nav className="h-screen p-6 z-50">
        <ToggleNav />
        {/* Navigation links - potentieel met smooth scroll/snap scroll naar de juiste sectie op de pagina */}
        {/* Knop contact - openen email naar mij sturen */}
        {/* Knop download CV */}
      </nav>
      <Blur />
    </NavContextProvider>
  )
}

export default Navigation