import { gsap } from "gsap"
import { MutableRefObject } from "react"

const animations = gsap.context(self => {
	self.add("open", (ref: MutableRefObject<HTMLDivElement>) => {
		gsap.fromTo(
			ref.current,
			{
				opacity: 0,
			},
			{
				duration: 0.225,
				opacity: 0.9,
				ease: "power1.inOut",
			}
		)
	})

	self.add("close", (ref: MutableRefObject<HTMLDivElement>) => {
		gsap.fromTo(
			ref.current,
			{
				opacity: 0.9,
			},
			{
				opacity: 0,
				ease: "power1.inOut",
				duration: 0.225,
			}
		)
	})
})

export default animations
