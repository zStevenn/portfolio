"use client"

import { useThemeContext } from "@/hooks/context/useThemeContext";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useRef } from "react";

type DarkModeButtonProps = {
  className?: string;
}

function DarkModeButton({ className }: DarkModeButtonProps) {
  const iconContainerRef = useRef<HTMLDivElement>(null)
  const { theme, setTheme } = useThemeContext()

  const isDarkMode = theme === 'dark'

  function toggleDarkmode() {
    setTheme(isDarkMode ? "light" : "dark")
  }

  return (
    <button
      className={`${className ? className : ""} bg-neutral-100 dark:bg-neutral-900 rounded-[18px] w-20 h-10 relative border-2 border-neutral-700 dark:border-neutral-100`}
      onClick={toggleDarkmode}
    >
      <div
        ref={iconContainerRef}
        className={`transition-all duration-500 absolute rounded-[16px] bg-yellow-500 dark:bg-slate-700 h-8 w-8 top-1/2 grid place-items-center shadow-inner ${isDarkMode ? "translate-x-[125%]" : "translate-x-[10%]"} -translate-y-1/2`}>
        {isDarkMode ? <MoonIcon className="h-4" /> : <SunIcon className="h-6" />}
      </div>
    </button>
  )
}

export default DarkModeButton
