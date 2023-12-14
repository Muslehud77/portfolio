
import CrystalCUp from "./CrystalCup";
import DeviceDynasty from "./DeviceDynasty";
import PhotoBerry from "./PhotoberryStory";
import ProjectsHead from "./ProjectsHead";
import TalentSphere from "./TalentSphere";




const Projects = () => {
    return (
      <div className="pt-56">
        <div className="p-10 container mx-auto  section relative w-full overflow-hidden">
          <ProjectsHead />
          <div className="mt-10 space-y-8">
            <TalentSphere />
            <PhotoBerry/>
            <CrystalCUp />
            <DeviceDynasty/>
          </div>
        </div>
      </div>
    );
};

export default Projects;