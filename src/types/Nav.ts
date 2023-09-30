import { Dispatch, SetStateAction } from "react"

export type Nav = "open" | "closed"

export type NavContextProps = {
	isOpen: boolean
	nav: Nav
	setNav: Dispatch<SetStateAction<Nav>>
}

export type NavProviderProps = {
	children: React.ReactNode
}
