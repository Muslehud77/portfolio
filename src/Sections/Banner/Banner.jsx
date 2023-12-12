import { useEffect, useRef } from "react";
import BannerVideo from "../../Components/BannerVideo";
import Reveal from "../../Components/Reveal/Reveal";
import me from "../../Assets/personal.png"

const Banner = () => {
    const ref = useRef(null)


    return (
      <div ref={ref} className="relative h-screen w-screen">
        <BannerVideo />

        <div className="flex justify-center items-center w-full h-full"></div>
        <div className="absolute top-0 flex flex-col items-center justify-center  h-screen text-start w-screen">
          <div className="flex justify-center items-center mt-20">
            <div>
              <Reveal>
                <h1 className="text-7xl text-white font-montserrat font-bold">
                  Hi, I'm Musleh
                </h1>
              </Reveal>
              <Reveal>
                <h1 className="text-2xl text-white font-montserrat">
                  I'm a <span className="font-bold">MERN Stack Developer</span>
                </h1>
              </Reveal>
            </div>
            <div>
              <Reveal>
                {" "}
                <img className="w-96 opacity-80" src={me} />
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;