
import { useEffect, useRef } from 'react';

import Navbar from '../Components/Navbar/Navbar';
import AboutMe from '../Sections/AboutMe/AboutMe';
import Banner from '../Sections/Banner/Banner';
import Lenis from "@studio-freight/lenis";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Projects from '../Sections/Projects/Projects';
import BackgroundOverlay from '../Components/Background/BackgroundOverlay';







const Root = () => {
   const scrollRef = useRef(null)

   useEffect(()=>{
    const lenis = new Lenis();

     lenis.on("scroll", ScrollTrigger.update);

      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });

      gsap.ticker.lagSmoothing(0);
   

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
 
    requestAnimationFrame(raf);
   },[])

    return (
      <div ref={scrollRef} id="scroll-container" className="overflow-x-hidden ">
        <Navbar />
          <Banner />
          <BackgroundOverlay/>
          <AboutMe />
          <Projects/>
        
      </div>
    );
};

export default Root;