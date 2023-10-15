import { useEffect, useState } from "react"

function useViewportWidth() {
	const [viewportWidth, setViewportWidth] = useState(
		typeof window !== "undefined" ? window.innerWidth : 0
	)

	function handleResize() {
		setViewportWidth(window.innerWidth)
	}

	useEffect(() => {
		if (typeof window !== "undefined") {
			window.addEventListener("resize", handleResize)

			return () => {
				window.removeEventListener("resize", handleResize)
			}
		}
	}, [])

	return viewportWidth
}

export default useViewportWidth
