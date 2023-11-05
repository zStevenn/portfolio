import { gsap } from "gsap"
import { MutableRefObject } from 'react'

const animations = gsap.context((self) => {
  self.add('open', (
    svgOpenRef: MutableRefObject<SVGSVGElement | null>,
    svgClosedRef: MutableRefObject<SVGSVGElement | null>) => {
    gsap.to(svgOpenRef.current, { scale: 1, duration: 0.2 })
    gsap.to(svgClosedRef.current, { scale: 0, duration: 0.2 })
  })

  self.add('close', (
    svgOpenRef: MutableRefObject<SVGSVGElement | null>,
    svgClosedRef: MutableRefObject<SVGSVGElement | null>) => {
    gsap.to(svgOpenRef.current, { scale: 0, duration: 0.2 })
    gsap.to(svgClosedRef.current, { scale: 1, duration: 0.2 })
  })
})

export default animations