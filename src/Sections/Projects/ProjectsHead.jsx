import Reveal from "../../Components/Reveal/Reveal";


const ProjectsHead = () => {
    return (
      <div className="flex mb-10 lg:mb-0  flex-wrap w-full  container px-5 lg:">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
          <Reveal>
            <h1 className="text-3xl font-montserrat md:text-5xl font-medium title-font mb-2 text-white">
              Recent Projects & Work
            </h1>
          </Reveal>
          <div className="h-1 w-20 bg-white rounded"></div>
        </div>
        <div className="lg:w-1/2 font-montserrat w-full leading-relaxed text-white">
          <Reveal>
            <p>
              I craft projects meticulously, infusing them with distinctive
              designs and care. Each creation embodies unique features,
              reflecting a fusion of innovation and functionality
            </p>
          </Reveal>
        </div>
      </div>
    );
};

export default ProjectsHead;