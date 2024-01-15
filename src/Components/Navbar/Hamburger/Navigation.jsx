
import { motion } from "framer-motion";
import { Links } from "./Links";
import { FaRegUser } from "react-icons/fa6";
import { TfiMenuAlt } from "react-icons/tfi";
import { BsRocketTakeoffFill } from "react-icons/bs";
import { MdHomeRepairService } from "react-icons/md";
import { GrContact } from "react-icons/gr";
import { Link } from "react-scroll";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

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
    offset: -40,
  },
  {
    name: "Services",
    icon: <MdHomeRepairService />,
    dis: "translate-x-48",
    offset: -200,
  },
  {
    name: "Contact",
    icon: <GrContact />,
    dis: "translate-x-64",
    offset: -500,
  },
];


const itemIds = [0, 1, 2, 3, 4];


export const Navigation = ({ isOpen }) => (
  <motion.ul
    className={`ul ${
      isOpen ? "flex" : "hidden"
    }  justify-center flex-col items-center`}
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
            className={`flex flex-col items-center text-center pt-6 relative `}
          >
            <span>{menu.icon}</span>
            <span>{menu.name}</span>
          </Link>
        </Links>
      </li>
    ))}

    {itemIds.map((i) => (
      <Links i={i} key={i} />
    ))}
  </motion.ul>
);