import React, { useEffect, useRef } from 'react';
import TechNologies from './TechNologies';
import SplitType from "split-type";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const AboutMe = () => {
  const ref = useRef(null)
  const lineRef = useRef(null)

  



  useEffect(() => {
    let typeSplit;

    const createAnimation=()=> {
      let allMasks = document.querySelectorAll(".word ");
      
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        
       
        },
      });
      let line = gsap.timeline({
        scrollTrigger: {
          trigger: lineRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1,
       
        },
      });

      tl.to(allMasks, {
       color: "white",
        duration: 1,
        stagger: 0.5,
      });
      line.to(lineRef.current, {
        width: "100%",
        duration: 2,
        stagger: 0.5,
      });


    }

    const runSplit=()=> {
      typeSplit = new SplitType(ref.current, {
        types: "lines, words",
      });

     

      createAnimation();
 
    }

    runSplit();

// window.addEventListener("resize",()=>{
//       runSplit();
//        createAnimation();
//     })


  }, []);


  return (
    <div className="relative">
      <div className="flex justify-around h-screen flex-col md:flex-row container mx-auto p-10 md:justify-center items-start ">
        <div className="w-full md:w-1/2">
          <h1
            ref={ref}
            id="target"
            className="text-2xl transition-all duration-500 text-gray-600  lg:text-3xl xl:text-5xl font-montserrat font-semibold"
          >
            As a MERN stack developer, I specialize in crafting dynamic
            interfaces with React, employing Tailwind CSS for modern design, and
            utilizing Express.js for robust back-end development. My passion
            lies in creating websites with clean, user-friendly experiences.
          </h1>
        </div>
        <div className="w-full md:w-1/2 md:h-full flex flex-col justify-end">
          <h3 className="text-2xl font-montserrat ">
            Technologies That I'm familiar with
          </h3>
          <div ref={lineRef} className="w-0 h-1 bg-white"></div>
          <TechNologies />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;