"use client"

import Navigation from "@/components/navigation";
import { useThemeContext } from "@/hooks/context/useThemeContext";

export default function Home() {
  const { theme, setTheme } = useThemeContext()

  function toggleDarkmode() {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <main className="relative flex min-h-screen">
      <Navigation />
      <div
        onClick={toggleDarkmode}
        className="grid place-items-center hover:cursor-pointer flex-1"
      >
        Klik om tussen darkmode te toggelen
      </div>
    </main>
  )
}
