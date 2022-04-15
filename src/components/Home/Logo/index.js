import './index.scss'
import LogoY from '../../../assets/images/LogoSolid1.png'
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
      duration: 10,
    })

    gsap.fromTo(solidLogoRef.current, {
      opacity: 0,
    }, {
      opacity: 1,
      duration: 4,
      delay: 6,
      })
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img ref={solidLogoRef} className='solid-logo' src={LogoY} alt="Y" />
      <svg version="1.0" className='outline-logo' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	 viewBox="0 0 700 1000">
<g className="svg-container"
   transform='translate(50, -50)'
	 fill="none"
>
<path 
ref={outlineLogoRef}
d="M103,290.07c-5.74-1.65-11.64-2.48-17.7-2.48
c-6.9,0-13.25,0.58-19.01,1.73c-5.77,1.16-8.64,2.88-8.64,5.16c0,1.39,5.37,6.91,16.12,16.55c10.75,9.64,21.52,21.12,32.28,34.43
l11.52,13.79c31.5,40.87,62.98,75.89,94.48,105.04c28.02,25.94,55.74,40.34,83.16,43.21c0,0,0.01,0,0.02,0 M352.35,720.16
c-0.02,0-0.02,0-0.02,0c-13.63-0.43-20.43-4.33-20.43-11.66c0-10.1,9.59-44.66,28.8-103.68c16.39-50.36,30.55-90.78,42.46-121.25
 M311.93,475.93c2.81,0.28,5.63,0.41,8.45,0.41c19.19,0,36.1-3.89,50.69-11.7c14.59-7.82,26.5-17,35.72-27.57
c8.45-9.62,18.64-23.4,30.55-41.31c11.9-17.91,20.92-32.61,27.07-44.09c24.58-44.1,38.02-69.58,40.33-76.47
c3.85-9.64,7.3-16.41,10.38-20.31c3.06-3.91,8.06-5.86,14.97-5.86c5.77,0,11.37,0.81,16.78,2.42 M549.328,331.958
c-8.453,11.938-19.203,29.156-32.266,51.656c-33.812,59.25-59.547,124.703-77.203,196.328c-2.312,11.953-4.609,24.812-6.922,38.594
s-3.453,25.484-3.453,35.125c0,5.516,2.875,10.797,8.641,15.844c5.766,5.062,8.656,8.266,8.656,9.641c0,2.75-5,7.688-14.984,14.812
c-10,7.125-21.141,13.656-33.422,19.625c-12.297,5.969-22.281,8.953-29.953,8.953c-15.375,0-23.047-3.906-23.047-11.703
c0-10.094,9.594-44.656,28.797-103.672c19.203-59,35.344-104.359,48.406-136.062c-18.438,12.406-34.953,22.062-49.547,28.938
c-14.594,6.891-32.656,10.328-54.156,10.328c-30.734,0-61.844-14.578-93.344-43.734s-62.984-64.172-94.484-105.047l-11.516-13.781
C108.766,334.489,98,323.005,87.25,313.364s-16.125-15.156-16.125-16.547c0-2.281,2.875-4,8.641-5.156s12.109-1.734,19.016-1.734
c25.344,0,48.016,14.469,67.984,43.406c27.656,39.5,55.109,73.609,82.391,102.297c27.266,28.703,55.5,43.047,84.703,43.047
c19.188,0,36.094-3.891,50.688-11.703s26.5-17,35.719-27.562c8.453-9.625,18.641-23.406,30.547-41.312s20.922-32.609,27.078-44.094
c24.578-44.094,38.016-69.578,40.328-76.469c3.844-9.641,7.297-16.406,10.375-20.312c3.062-3.906,8.062-5.859,14.969-5.859
c8.453,0,16.516,1.734,24.203,5.172c7.672,3.438,11.516,7.453,11.516,12.047c0,7.812-2.312,16.078-6.922,24.797
C567.75,302.114,560.078,314.974,549.328,331.958z"/>
</g>
</svg>
    </div>
  )
}

export default Logo