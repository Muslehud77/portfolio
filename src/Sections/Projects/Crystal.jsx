import crystal from '../../Assets/Projects/Crystal/thumbnail-crystal.png'
import { FiGithub } from "react-icons/fi";
import { IoOpenOutline } from "react-icons/io5";
import Reveal from './../../Components/Reveal/Reveal';
const Crystal = () => {
    return (
      <div className="md:flex justify-center items-center text-right group">
        <Reveal>
          <div className="w-full h-full relative">
            <img src={crystal} className="rounded-xl" />
            <div className="bg-black transition-all duration-500 opacity-50 group-hover:bg-opacity-0 w-full h-full absolute inset-0"></div>
          </div>
        </Reveal>
        <div className="space-y-5">
          <div className="space-y-2">
            <h3 className="font-serif tracking-widest">MERN Project</h3>
            <h2 className="text-3xl text-white font-semibold">CrystalCup</h2>
          </div>
          <div>
            <h3 className="text-xl transition-all duration-500 group-hover:shadow-[0_0_30px_white] shadow-[0_0_30px_#313647] rounded-xl text-right bg-[#09081F] backdrop-blur-sm p-5 md:-ml-16">
              It's a café website that allows users to view the menu and place
              orders online. and allows admin to add, edit, and delete items.
            </h3>
          </div>
          <div className="space-y-10">
            <div className="tracking-widest  flex flex-wrap justify-end">
              <span className="text-sm mr-2 font-serif">React.Js</span>
              <span className="text-sm mr-2 font-serif">Node.Js</span>
              <span className="text-sm mr-2 font-serif">Express.Js</span>
              <span className="text-sm mr-2 font-serif">Mongodb</span>
              <span className="text-sm mr-2 font-serif">Firebase</span>
              <span className="text-sm mr-2 font-serif">Tailwind</span>
              <span className="text-sm mr-2 font-serif">TanstackQuery</span>
              <span className="text-sm mr-2 font-serif">Axios</span>
            </div>
            <div className=" flex justify-end items-center gap-1 text-white">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Muslehud77/Crystal-cup-cafe"
                className="text-2xl btn !bg-white text-black"
              >
                <FiGithub />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://crystal-cup.web.app/"
                className="text-2xl btn !bg-transparent backdrop-blur-sm outline outline-1 !outline-gray-300"
              >
                <IoOpenOutline />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Crystal;