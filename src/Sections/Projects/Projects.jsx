
import Crystal from "./Crystal";
import CrystalCUp from "./CrystalCup";
import Device from "./Device";
import DeviceDynasty from "./DeviceDynasty";
import Photoberryy from "./Photoberry";

import ProjectsHead from "./ProjectsHead";
import Talent from "./Talent";
import TalentSphere from "./TalentSphere";




const Projects = () => {
    return (
      <div className="pt-56 ">
        <div className="p-10 container mx-auto  section relative w-full overflow-hidden">
          <ProjectsHead />
          <div className="mt-10 space-y-10">
            <Talent/>
            <Crystal/>
            <Device/>
            <Photoberryy/>
            {/* <TalentSphere /> */}
            {/* <PhotoBerry /> */}
            {/* <CrystalCUp /> */}
            {/* <DeviceDynasty /> */}
          </div>
        </div>
      </div>
    );
};

export default Projects;