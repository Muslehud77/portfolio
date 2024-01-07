
import Crystal from "./Crystal";

import Device from "./Device";

import Photoberryy from "./Photoberry";

import ProjectsHead from "./ProjectsHead";
import Talent from "./Talent";





const Projects = () => {
    return (
      <div id="Projects" className="pt-56 ">
        <div className="p-10 container mx-auto  section relative w-full overflow-hidden">
          <ProjectsHead />
          <div className="mt-10 space-y-10">
            <Talent/>
            <Crystal/>
            <Device/>
            <Photoberryy/>
           
          </div>
        </div>
      </div>
    );
};

export default Projects;