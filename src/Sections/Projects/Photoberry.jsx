import photoberry from "../../Assets/Projects/Photoberry/thumphotoberry.png";
import { FiGithub } from "react-icons/fi";
import { IoOpenOutline } from "react-icons/io5";
import Reveal from "./../../Components/Reveal/Reveal";
const Photoberryy = () => {
  return (
    <div className="lg:flex flex-row-reverse justify-center items-center text-left group">
      <Reveal>
        <div className="w-full h-full relative mb-5 lg:mb-0">
          <img src={photoberry} className="rounded-xl" />
          <div className="bg-black transition-all rounded-xl duration-500 opacity-50 group-hover:bg-opacity-0 w-full h-full absolute inset-0"></div>
        </div>
      </Reveal>
      <div className="space-y-5">
        <Reveal>
          <div className="space-y-2">
            <h3 className="font-serif tracking-widest">Front-end Project</h3>
            <h2 className="text-3xl text-white font-semibold">
              {" "}
              PhotoberryEvents
            </h2>
          </div>
        </Reveal>
        <div className="transition-all lg:w-[700px] duration-500 group-hover:shadow-[0_0_30px_white] shadow-[0_0_30px_#313647] rounded-xl text-left bg-[#09081F] backdrop-blur-sm p-5 lg:-mr-16">
          <Reveal>
            {" "}
            <h3 className="text-xl ">
              This event management website utilizes React, offers event
              reservations. Integrating Three.js enables immersive 3D
              experiences, enhancing user engagement and interaction.
            </h3>
          </Reveal>
        </div>
        <div className="space-y-10">
          <Reveal>
            <div className="tracking-widest  flex flex-wrap justify-start lg:ml-2">
              <span className="text-sm mr-2 font-serif">React.Js</span>
              <span className="text-sm mr-2 font-serif">Three.Js</span>
              <span className="text-sm mr-2 font-serif">Aos</span>
              <span className="text-sm mr-2 font-serif">Firebase</span>

              <span className="text-sm mr-2 font-serif">Tailwind</span>
            </div>
          </Reveal>
          <Reveal>
            <div className=" flex justify-start items-center gap-1 text-white">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Muslehud77/photoberry-story"
                className="text-2xl btn !bg-white text-black"
              >
                <FiGithub />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://photoberry-events.web.app/"
                className="text-2xl btn !bg-transparent backdrop-blur-sm border border-1 !border-gray-300"
              >
                <IoOpenOutline />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default Photoberryy;
