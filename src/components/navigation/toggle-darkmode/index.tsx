"use client"

import { useNavContext } from "@/hooks/context/useNavContext";
import { useThemeContext } from "@/hooks/context/useThemeContext";

type DarkModeButtonProps = {
  className?: string;
}

function DarkModeButton({ className }: DarkModeButtonProps) {
  const { isOpen } = useNavContext()
  const { theme, setTheme } = useThemeContext()

  function toggleDarkmode() {
    setTheme(theme === "dark" ? "light" : "dark")
  }
  return (
    <button
      className={`${isOpen ? "" : "hidden sm:block"} ${className}`}
      onClick={toggleDarkmode}
    >
      DarkModeButton
    </button>
  )
}

export default DarkModeButton