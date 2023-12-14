
import { motion } from "framer-motion";
import noise1 from "../../Assets/Noise/black-noise.png"

const BackgroundOverlay = () => {
  return (
    // NOTE: An overflow of hidden will be required on a wrapping
    // element to see expected results
    <div className="relative overflow-hidden ">
   
      <FuzzyOverlay />
    </div>
  );
};

const FuzzyOverlay = () => {
  return (
    <motion.div
      initial={{ transform: "translateX(-10%) translateY(-10%)" }}
      animate={{
        transform: "translateX(10%) translateY(10%)",
      }}
      transition={{
        repeat: Infinity,
        duration: 0.2,
        ease: "linear",
        repeatType: "mirror",
      }}
      // You can download these PNGs here:
      // https://www.hover.dev/black-noise.png
      // https://www.hover.dev/noise.png
      style={{
        backgroundImage: `url(${noise1})`,
        // backgroundImage: 'url("/noise.png")',
      }}
      className="pointer-events-none fixed -inset-[100%] opacity-[15%]"
    />
  );
};



export default BackgroundOverlay;
