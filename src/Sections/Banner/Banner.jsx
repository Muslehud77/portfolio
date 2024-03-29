/* eslint-disable react/no-unescaped-entities */
import {  useRef } from "react";

import Reveal from "../../Components/Reveal/Reveal";
import me from "../../Assets/personal.png"
import { FaArrowRightLong, FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import Image from "./Image";
const Banner = () => {
    const ref = useRef(null)


    return (
      <div id="Musleh" ref={ref} className="relative  h-screen w-screen">
 

        <div className=" flex flex-col items-center justify-center  h-screen text-start w-screen">
          <div className="flex px-10 flex-col md:flex-row justify-center gap-10 items-center mt-16">
            <div className="space-y-1">
              <Reveal>
                <h1 className="text-5xl xl:text-7xl text-white font-montserrat font-bold">
                  Hi, I'm <br /> Musleh{" "}
                  <span className="text-lg">based in China.</span>
                </h1>
              </Reveal>
              <Reveal>
                <h3 className="text-2xl text-white font-montserrat">
                  I Build things <span className="font-bold">for the web.</span>
                </h3>
              </Reveal>
              <Reveal>
                <p>
                  I leverage React for dynamic interfaces, Tailwind CSS for
                  modern design, <br /> and Express.js for robust back-end
                  development in web applications.
                </p>
              </Reveal>
              <Reveal>
                <div className="flex gap-2 mt-1">
                  <button className="flex justify-center items-center gap-2 text-white">
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://github.com/Muslehud77"
                    >
                      {" "}
                      <FaArrowRightLong />
                    </a>
                  </button>
                  <button className="hover:text-white text-xl transition-all duration-300">
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://www.linkedin.com/in/muslehud777/"
                    >
                      <FaLinkedin />
                    </a>
                  </button>
                  <button className="hover:text-white text-xl transition-all duration-300">
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://github.com/Muslehud77"
                    >
                      <FaGithub />
                    </a>
                  </button>
                  <button className="hover:text-white text-xl transition-all duration-300">
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://www.facebook.com/Musleh.ud/"
                    >
                      <FaFacebook />
                    </a>
                  </button>
                  <button className="hover:text-white text-xl transition-all duration-300">
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://www.instagram.com/muslehud77/"
                    >
                      <FaInstagram />
                    </a>
                  </button>
                </div>
              </Reveal>
            </div>
            <div className="hidden  md:flex">
              <Reveal>
              
                <Image me={me} />
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;