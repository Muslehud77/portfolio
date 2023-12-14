import device from "../../Assets/Projects/device.png";
import Reveal from "../../Components/Reveal/Reveal";
const DeviceDynasty = () => {
  return (
    <div className="flex flex-col justify-between gap-5">
      <Reveal>
        <img className="w-[60vw] md:w-[60vw] object-cover" src={device} />
      </Reveal>
      <div className="flex flex-col gap-5 ">
        <div>
          <Reveal>
            <h1 className="text-3xl font-montserrat text-white font-semibold">
              Device Dynasty
            </h1>
          </Reveal>
          <Reveal>
            <p>
              It's a technology marketplace website where users can purchase
              various tech products. and admin can add, remove, edit products.
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
                  NodeJs
                </button>
                <button className="btn btn-sm btn-outline text-xs">
                  ExpressJs
                </button>
                <button className="btn btn-sm btn-outline text-xs">
                  Mongodb
                </button>
                <button className="btn btn-sm btn-outline text-xs">
                  Firebase
                </button>
                <button className="btn btn-sm btn-outline text-xs">
                  Tailwind
                </button>
                <button className="btn btn-sm btn-outline text-xs">
                  Tanstack Query
                </button>
                <button className="btn btn-sm btn-outline text-xs">
                  Axios
                </button>
              </div>
            </Reveal>
          </div>
          <Reveal>
            <div className="mt-5 flex justify-end gap-1">
              <a
                target="_blank"
                href="https://device-dynasty.web.app/"
                className="btn btn-sm capitalize hover:bg-black hover:text-white bg-white text-gray-700"
              >
                Live-site
              </a>
              <a
                target="_blank"
                href="https://github.com/Muslehud77/Device-Dynasty"
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

export default DeviceDynasty;
