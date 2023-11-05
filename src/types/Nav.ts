import { Dispatch, SetStateAction } from "react"

export type Nav = "open" | "closed"

export type NavContextProps = {
	isOpen: boolean
	nav: Nav
	setNav: Dispatch<SetStateAction<Nav>>
	closeNav: () => void
}

export type NavProviderProps = {
	children: React.ReactNode
}
