
import Crystal from "./Crystal";

import Device from "./Device";

import Photoberryy from "./Photoberry";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectsHead from "./ProjectsHead";
import Talent from "./Talent";
import { useEffect, useRef } from "react";

const classesForProjects = "h-screen w-[100vw] flex justify-center items-center container mx-auto "



const Projects = () => {
const sectionRef = useRef(null)
const triggerRef = useRef(null)
gsap.registerPlugin(ScrollTrigger);

useEffect(()=>{

  const pin = gsap.fromTo(
    sectionRef.current,
    {
      translateX: 0,
    
    },
    {
      translateX: "-300vw",
  
      height: "100vh",
      ease: "none",
      duration: 1,
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: "2000 top",
        scrub: 0.6,
        pin: true,
      },
    }
  );

  return ()=> pin.kill()

},[])


    return (
      <div id="Projects" className="pt-10">
        <div className=" w-full relative overflow-hidden">
          <div className="lg:absolute flex justify-center items-center w-full -top-0 lg:top-20">
            <ProjectsHead />
          </div>
          <div ref={triggerRef}>
            <div
              ref={sectionRef}
              className="h-screen   w-[400vw] flex gap-10 flex-row relative"
            >
              <div className={`${classesForProjects} pl-5`}>
                <Talent />
              </div>
              <div className={classesForProjects}>
                <Crystal />
              </div>
              <div className={classesForProjects}>
                <Device />
              </div>
              <div className={`${classesForProjects} pr-5`}>
                <Photoberryy />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Projects;