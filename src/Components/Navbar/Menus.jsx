import { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";

const Menus = () => {
    const [active,setActive] = useState(0)
  const menus = [
    { name: "Home", icon: <IoHomeOutline />, dis: "translate-x-0" },
    { name: "Profile", icon: <IoHomeOutline />, dis: "translate-x-16" },
    { name: "Message", icon: <IoHomeOutline />, dis: "translate-x-32" },
    { name: "Photos", icon: <IoHomeOutline />, dis: "translate-x-48" },
    { name: "Settings", icon: <IoHomeOutline />, dis: "translate-x-64" },
  ];
  return (
    // rotate-[-90deg]
    <div>
      <div className="border scale-90 max-h-[4.4rem] px-6 rounded-xl backdrop-blur-sm ">
        <ul className="flex relative">
          <span
            className={`bg-white border-4 border-black h-16 w-16 absolute -top-5 rounded-full text-white duration-500 ${menus[active].dis}`}
          ></span>
          {menus.map((menu, i) => (
            <li key={i} className="w-16">
              <a
                onClick={() => setActive(i)}
                className={`flex flex-col items-center text-center pt-6 relative `}
              >
                <span
                  className={`text-xl duration-500 cursor-pointer ${
                    active === i && "-mt-6 text-black"
                  }`}
                >
                  {menu.icon}
                </span>
                <span
                  className={`${
                    active === i
                      ? "translate-y-4 duration-700 opacity-100"
                      : "opacity-0 translate-y-10"
                  }`}
                >
                  {menu.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menus;
