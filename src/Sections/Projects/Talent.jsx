import talent from "../../Assets/Projects/Talent/ts.png";
import { FiGithub } from "react-icons/fi";
import { IoOpenOutline } from "react-icons/io5";
import Reveal from "./../../Components/Reveal/Reveal";
const Talent = () => {
  return (
    <div className="lg:flex justify-center items-center w-full text-right group px-10">
      <Reveal>
        <div className="w-full h-full relative mb-5 lg:mb-0">
          <img src={talent} className="rounded-xl" />
          <div className="bg-black transition-all rounded-xl duration-500 opacity-50 group-hover:bg-opacity-0 w-full h-full absolute inset-0"></div>
        </div>
      </Reveal>
      <div className="space-y-5">
        <Reveal>
          <div className="space-y-2">
            <h3 className="font-serif tracking-widest">MERN Project</h3>
            <h2 className="text-3xl text-white font-semibold">TalentSphere</h2>
          </div>
        </Reveal>
        <div className="transition-all xl:w-[700px] duration-500 group-hover:shadow-[0_0_30px_white] shadow-[0_0_30px_#313647] rounded-xl text-right bg-[#09081F] backdrop-blur-sm p-5 lg:-ml-16">
          <Reveal>
            <h3 className="text-xl ">
              It's a contest website that enables users to participate in
              contests and win prizes, Creators can create a contest and earn
              money, admin can manage everything.
            </h3>
          </Reveal>
        </div>
        <div className="space-y-10">
          <Reveal>
            <div className="tracking-widest  flex flex-wrap justify-end lg:ml-2">
              <span className="text-sm mr-2 font-serif">React.Js</span>
              <span className="text-sm mr-2 font-serif">FramerMotion</span>
              <span className="text-sm mr-2 font-serif">Node.Js</span>
              <span className="text-sm mr-2 font-serif">Express.Js</span>
              <span className="text-sm mr-2 font-serif">Mongodb</span>
              <span className="text-sm mr-2 font-serif">Firebase</span>
              <span className="text-sm mr-2 font-serif">Tailwind</span>
              <span className="text-sm mr-2 font-serif">TanstackQuery</span>
              <span className="text-sm mr-2 font-serif">Axios</span>
            </div>
          </Reveal>
          <Reveal>
            <div className=" flex justify-end items-center gap-1 text-white">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Muslehud77/Talent-Sphere"
                className="text-2xl btn !bg-white text-black"
              >
                <FiGithub />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://talent-sphere.web.app/"
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

export default Talent;
