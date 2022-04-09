import './index.scss'
import LogoY from '../../../assets/images/Logo-Y.png'
import { useEffect, useRef } from 'react'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import gsap from 'gsap-trial'


const Logo = () => {

  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap.timeline().to(bgRef.current, {
      duration: 1,
      opacity: 1,
    })
    .from(outlineLogoRef.current, {
      drawSVG: 0,
      duration: 20,
    })

    gsap.fromTo(solidLogoRef.current, {
      opacity: 0,
    }, {
      opacity: 1,
      duration: 4,
      delay: 4,
      })
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img ref={solidLogoRef} className='solid-logo' src={LogoY} alt="Y" />
      <svg
	width="559pt"
	height="897pt"
	version="1.0"
	viewBox="0 0 559 897"
	xmlns="http://www.w3.org/2000/svg"
>
<g className="svg-container"
    // transform="translate(0 457) scale(.1 -.1)"
	  fill="none"
    strokeWidth="1">
<path 
ref={outlineLogoRef}
d="M14.633 306.376c-.583.093-1.13.139-1.626.139-6.593 0-10.991-1.869-12.457-8.415-1.466-6.537 0-18.681 4.398-37.38l10.998-50.463c8.059-35.511 21.252-48.594 45.444-68.214 60.831-47.663 210.356-142.043 279.991-142.043 21.872 0 43.752 10.191 49.717 36.376M74.677 611.496c-10.692-11.781-17.759-27.886-15.491-44.252 2.932-20.559-5.127-49.533 130.467-256.052 48.018-73.467 79.488-120.285 91.391-148.162M188.436 472.279c6.221-1.023 14.09-5.44 23.207-15.305 104.081-110.271 27.853-17.76 258.003-285.027 8.066-9.345 29.318-37.38 41.046-37.38 12.223 0 23.44 16.17 29.574 32.786l.015.028M337.895 629.907c11.793-9.336 33.658-26.928 81.18-57.995 49.105-31.773 70.364-27.096 70.364-12.144 0 3.422-1.801 7.922-4.711 12.916M343.569 443.026v.009c-72.18 126.869-170.04 315.014-170.04 384 0 17.286 5.506 32.387 15.578 40.169"/><path d="M223.302 575.531c-21.989 24.297-69.632 78.498-99.684 78.498-24.188 0-54.973-30.838-50.575-62.611 2.932-20.559-5.131-49.529 130.468-256.053 62.302-95.319 96.751-145.782 96.751-168.21.733-6.542-5.131-9.345-9.529-10.28-112.142 71.021-173.711 117.747-240.411 162.603-5.131 4.672-17.591 11.214-23.455 11.214-6.597 0-10.995-1.869-12.46-8.411-1.466-6.541 0-18.69 4.398-37.38l10.994-50.463c8.063-35.511 21.256-48.594 45.444-68.219 60.836-47.66 210.361-142.044 279.992-142.044 25.654 0 51.308 14.017 51.308 51.397 0 42.053-55.706 127.092-76.961 161.669-115.809 188.77-141.462 217.739-142.929 245.775-.733 12.148 14.66 24.297 38.847-1.87 104.081-110.271 27.853-17.755 258.004-285.023 8.062-9.345 29.319-37.38 41.046-37.38 18.324 0 34.449 36.445 34.449 56.07 0 26.166-32.251 65.415-137.798 256.988-60.103 109.337-106.28 189.704-86.489 191.573 10.261.934 12.46-11.214 98.217-67.284 49.109-31.774 70.365-27.101 70.365-12.149s-34.449 50.463-44.71 57.939c-46.91 44.856-136.332 138.306-172.247 192.508-15.392 22.429-41.779 62.612-66.7 62.612-20.523 0-32.25-20.559-32.25-45.791 0-93.451 179.576-405.574 231.616-487.81l-1.466-1.869-194.235 214.001z"/>
</g>
</svg>
    </div>
  )
}

export default Logo