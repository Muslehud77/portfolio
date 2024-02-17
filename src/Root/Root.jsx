
import { useEffect, useRef } from 'react';
import BackgroundVideo from "../Components/Background/BackgoundVideo";
import Navbar from '../Components/Navbar/Navbar';
import AboutMe from '../Sections/AboutMe/AboutMe';
import Banner from '../Sections/Banner/Banner';
import Lenis from "@studio-freight/lenis";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Projects from '../Sections/Projects/Projects';
import BackgroundOverlay from '../Components/Background/BackgroundOverlay';
import Contact from '../Sections/Contact/Contact';

import { TracingBeam } from '../Components/ScrollProgress/ScrollProgress';
import ServicesSection from '../Services/ServicesSection';








const Root = () => {
  

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
      <div className="overflow-hidden ">
       <BackgroundVideo />
        <Navbar />
        <Banner />
        <BackgroundOverlay />
        <TracingBeam>
          <AboutMe />{" "}
        </TracingBeam>
        <Projects />
        <ServicesSection />
        <Contact />
      </div>
    );
};

export default Root;