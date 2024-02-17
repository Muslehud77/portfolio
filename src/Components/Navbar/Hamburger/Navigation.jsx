
import { motion } from "framer-motion";
import { Links } from "./Links";
import { FaRegUser } from "react-icons/fa6";
import { TfiMenuAlt } from "react-icons/tfi";
import { BsRocketTakeoffFill } from "react-icons/bs";
import { MdHomeRepairService } from "react-icons/md";
import { GoDownload } from "react-icons/go";
import { GrContact } from "react-icons/gr";
import { Link } from "react-scroll";
import { useState } from "react";




const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const menus = [
  { name: "Musleh", icon: <FaRegUser />,  offset: -100 },
  {
    name: "About",
    icon: <TfiMenuAlt />,
   
    offset: -50,
  },
  {
    name: "Projects",
    icon: <BsRocketTakeoffFill />,
   
    offset: -40,
  },
  {
    name: "Services",
    icon: <MdHomeRepairService />,
   
    offset: -200,
  },
  {
    name: "Contact",
    icon: <GrContact />,
    offset: -500,
  },
  {
    name: "Resume",
    icon: <GoDownload />,
 
  },
];

  

export const Navigation = ({ isOpen, setIsOpen }) => {
  const [active, setActive] = useState(0);
  const [observer, setObserver] = useState(true);

  const onButtonClick = () => {
    const pdfUrl =
      "https://muslehud77.netlify.app/Resume_Sheik-Musleh-Uddin_React-Developer.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
       link.download = "Resume_Sheik-Musleh-Uddin_React-Developer.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const activeMenu = (i) => {
    setObserver(false);

    setActive(i);

    setTimeout(() => {
      setObserver(true);
    }, 2000);
  };

  return (
    <>
      <motion.ul
        className={`h-full ${
          isOpen ? "flex" : "hidden"
        }  justify-center flex-col md:flex-row gap-5 items-center`}
        variants={variants}
      >
        {menus.map((menu, i) => (
          <li key={i} className="w-16">
            <Links>
              <Link
                to={menu.name}
                spy={true}
                smooth={true}
                offset={menu.offset}
                duration={500}
                isDynamic={true}
                onClick={() => {
                  !menu.name === "Resume" && activeMenu(i);
                  setIsOpen(false);
                  menu.name === "Resume" && onButtonClick();
                }}
                onSetActive={() => observer && setActive(i)}
                className={`flex ${
                  active === i &&
                  
                  "bg-white text-black"
                } rounded-full flex-col justify-center py-5 items-center text-center pt-6 relative cursor-pointer`}
              >
                <span>{menu.icon}</span>
                <span>{menu.name}</span>
              </Link>
            </Links>
          
          </li>
        ))}
      </motion.ul>
    </>
  );
};