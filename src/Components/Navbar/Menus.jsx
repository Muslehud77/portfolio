import { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { TfiMenuAlt } from "react-icons/tfi";
import { BsRocketTakeoffFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Menus = ({hidden}) => {
    const [active,setActive] = useState(0)




  const menus = [
    { name: "Musleh", icon: <FaRegUser />, dis: "translate-x-0", offset: -100 },
    {
      name: "About",
      icon: <TfiMenuAlt />,
      dis: "translate-x-16",
      offset: -50,
    },
    {
      name: "Projects",
      icon: <BsRocketTakeoffFill />,
      dis: "translate-x-32",
      offset: 40,
    },
    { name: "Services", icon: <IoHomeOutline />, dis: "translate-x-48" },
    { name: "Contact", icon: <IoHomeOutline />, dis: "translate-x-64" },
  ];

   const handleSetActive = (to) => {
   
    setActive(to);
  };



  return (
    <div>
      <div
        className={`border ${
          !hidden && "opacity-50 bg-black"
        } hover:opacity-100 hover:bg-transparent  duration-300 scale-90 max-h-[4.4rem] px-6 rounded-xl backdrop-blur-sm`}
      >
        <ul className="flex relative">
          <span
            className={`bg-white border-4 border-black h-16 w-16 absolute -top-5 rounded-full text-white duration-500 ${menus[active].dis}`}
          ></span>
          {menus.map((menu, i) => (
            <li key={i} className="w-16">
              <Link
                to={menu.name}
                spy={true}
                smooth={true}
                offset={menu.offset}
                duration={500}
                onClick={() => setActive(i)}
                onSetActive={() => handleSetActive(i)}
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
                  } text-white`}
                >
                  {menu.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menus;
