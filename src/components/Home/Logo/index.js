import './index.scss'
import LogoY from '../../../assets/images/Logo-Anim-Solid.png'
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
      duration: 25,
    })

    gsap.fromTo(solidLogoRef.current, {
      opacity: 0,
    }, {
      opacity: 1,
      duration: 5,
      delay: 10,
      })
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img ref={solidLogoRef} className='solid-logo' src={LogoY} alt="Y" />
      <svg
      width="600px"
      height="900px"   
      version="1.0" 
      className='outline-logo' 
      xmlns="http://www.w3.org/2000/svg"
	    viewBox="0 0 600 900">
<g className="svg-container"
	  fill="none"
>
<path 
ref={outlineLogoRef}
d="M33.49 376.77h-.01c-1.38.31-2.63.48-3.68.48-6.82 0-11.37-1.62-12.89-7.3-1.52-5.67 0-16.21 4.55-32.43l11.38-43.78c8.34-30.81 21.99-42.16 47.03-59.19 62.95-41.35 217.69-123.24 289.75-123.24 2.46 0 4.91.1 7.35.32h.01m-163.73 409.1c6.12-1.33 13.58-5.21 22.11-12.94 107.71-95.68 28.82-15.41 267-247.29 8.34-8.11 30.34-32.44 42.47-32.44 2.04 0 4.06.37 6.04 1.04m-416.99 428.44h-.01c-1.35.16-2.66.24-3.94.24-25.03 0-56.89-26.75-52.34-54.32 3.03-17.84-5.31-42.97 135.02-222.16 64.47-82.7 100.12-126.48 100.12-145.94.41-3.09-1.19-5.21-3.47-6.64m204.63 358.75h-.01c-10.72-2.26-31.42 2.45-63.86 20.04-69.77 38.24-86.09 52.94-95.04 57.07m65.29-238.14c-67.13 92.75-224.35 327.84-224.35 402.42 0 21.89 12.13 39.73 33.37 39.73 1.31 0 2.61-.09 3.92-.27h.02 0 M243.245 589.957c-22.755 21.081-72.059 68.106-103.158 68.106-25.031 0-56.889-26.756-52.337-54.323 3.034-17.837-5.31-42.972 135.016-222.156 64.474-82.7 100.124-126.483 100.124-145.942.76-5.676-5.309-8.107-9.861-8.919-116.052 61.62-179.767 102.16-248.792 141.078-5.31 4.054-18.204 9.729-24.272 9.729-6.827 0-11.377-1.622-12.895-7.297-1.517-5.676 0-16.216 4.551-32.432l11.377-43.783c8.344-30.81 21.997-42.161 47.028-59.188 62.957-41.351 217.694-123.24 289.752-123.24 26.549 0 53.096 12.162 53.096 44.594 0 36.485-57.646 110.268-79.643 140.267-119.847 163.779-146.395 188.914-147.912 213.238-.759 10.54 15.17 21.08 40.201-1.622 107.71-95.673 28.824-15.405 266.997-247.291 8.344-8.108 30.34-32.432 42.477-32.432 18.963 0 35.65 31.621 35.65 48.647 0 22.702-33.375 56.755-142.602 222.967-62.197 94.863-109.984 164.591-89.504 166.213 10.619.811 12.895-9.729 101.641-58.377 50.82-27.567 72.818-23.514 72.818-10.541s-35.65 43.783-46.27 50.27c-48.545 38.918-141.084 119.997-178.252 167.023-15.928 19.459-43.235 54.322-69.024 54.322-21.239 0-33.375-17.837-33.375-39.729 0-81.079 185.836-351.883 239.69-423.232l-1.516-1.622-201.005 185.672z"/>
</g>
</svg>
    </div>
  )
}

export default Logo