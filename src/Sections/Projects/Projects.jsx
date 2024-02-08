import Crystal from "./Crystal";

import Device from "./Device";

import Photoberryy from "./Photoberry";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectsHead from "./ProjectsHead";
import Talent from "./Talent";
import { useEffect, useRef } from "react";

const classesForProjects =
  "lg:h-screen px-5 w-[100vw]  flex justify-center items-center container mx-auto ";

const Projects = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const mm = gsap.matchMedia()
    mm.add("(min-width:1000px)",()=>{
      gsap.fromTo(
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
    })
    

    

    return () => mm.kill();
  }, []);

  return (
    <div id="Projects" className="pt-10">
      <div className=" w-full relative overflow-hidden">
        <div className="xl:absolute flex justify-center items-center w-full -top-0 lg:top-5">
          <ProjectsHead />
        </div>
        <div ref={triggerRef}>
          <div
            ref={sectionRef}
            className="lg:h-screen space-y-10 xl:space-y-0 xl:pt-10  lg:w-[400vw] lg:flex gap-10 flex-row relative"
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
