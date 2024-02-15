/* eslint-disable react/prop-types */

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Reveal from "../Components/Reveal/Reveal";




const ServiceCard = ({children}) => {
  return (
    <div className="flex justify-center items-center w-full h-full mb-10 lg:mb-0">
      
  
        <TiltCard>{children}</TiltCard>
     
    </div>
  );
};

const TiltCard = ({ children }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  );

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative h-96 w-full rounded-xl bg-gradient-to-br from-gray-500 to-violet-100"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-xl shadow-lg bg-[#111827]"
      >
        <Reveal> {children}</Reveal>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
