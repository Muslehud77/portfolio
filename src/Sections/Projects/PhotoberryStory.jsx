import photoberry from "../../Assets/Projects/photoberry.png";
import Reveal from "../../Components/Reveal/Reveal";
const PhotoBerry = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-5">
      <Reveal>
        <img className="w-[60vw] md:w-[60vw] object-cover" src={photoberry} />
      </Reveal>
      <div className="flex flex-col gap-5 ">
        <div>
          <Reveal>
            <h1 className="text-3xl font-montserrat text-white font-semibold">
              Photoberry Events
            </h1>
          </Reveal>
          <Reveal>
            <p>
              It's an event management website that enables users to reserve and
              book events.
            </p>
          </Reveal>
        </div>
        <div className="flex flex-col h-full">
          <h1 className="text-md font-semibold font-montserrat">
            Technologies Used
          </h1>
          <div className="w-56 h-[1px] bg-white mt-1"></div>
          <div className=" mt-3 flex-1">
            <Reveal>
              <div className="flex flex-wrap gap-2">
                <button className="btn btn-sm btn-outline text-xs">
                  React
                </button>
                <button className="btn btn-sm btn-outline text-xs">
                  ThreeJs
                </button>
                <button className="btn btn-sm btn-outline text-xs">
                 Aos
                </button>
              
                <button className="btn btn-sm btn-outline text-xs">
                  Firebase
                </button>
                <button className="btn btn-sm btn-outline text-xs">
                  Tailwind
                </button>
               
                
              </div>
            </Reveal>
          </div>
          <Reveal>
            <div className="mt-5 flex justify-end gap-1">
              <a
                target="_blank"
                href="https://photoberry-events.web.app/"
                className="btn btn-sm capitalize hover:bg-black hover:text-white bg-white text-gray-700"
              >
                Live-site
              </a>
              <a
                target="_blank"
                href="https://github.com/Muslehud77/photoberry-story"
                className="btn btn-sm capitalize hover:bg-black hover:text-white bg-white text-gray-700"
              >
                Code
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default PhotoBerry;
