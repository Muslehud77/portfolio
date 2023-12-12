import { useEffect, useState } from 'react';
import logo from '../../Assets/logo/logo-only2.svg'
import { SideBar } from './Hamburger/SideBar';
import LogoSvg from './LogoSvg';
import { motion } from 'framer-motion';



const Navbar = () => {

    const [hidden,setHidden] = useState(true)

   
   
    useEffect(()=>{
        const switchNav = ()=>{
            if(window.scrollY>=500){
                setHidden(false)
            }else{
                setHidden(true)
            }
        }
        window.addEventListener('scroll',switchNav)
    },[])



    return (
      <div
       
        className="fixed inset-0 z-50 h-20"
      >
        <motion.div
          animate={{
            opacity: hidden ? 1 : 0,
          }}
          transition={{ duration: 0.5 }}
          className={`flex justify-center items-center transition-all duration-500 mt-5 `}
        >
          <a target="_black" href="https://github.com/Muslehud77">
            <LogoSvg />
          </a>
        </motion.div>
        <div className="hidden lg:flex justify-center items-center">
          <motion.div
            animate={{
              translateX: !hidden ? "calc(100vw - 65vw)" : 0,
              translateY: !hidden ? "calc(-7vh)" : 0,
            }}
            transition={{ duration: 0.5 }}
            className={`flex justify-center transition-all duration-500 items-center mt-5`}
          >
            <div className="flex transition-all duration-300 border rounded-md border-[#151843] backdrop-blur-sm">
              <button className="btn bg-transparent border-0">Home</button>
              <button className="btn bg-transparent border-0">Home</button>
              <button className="btn bg-transparent border-0">Home</button>
              <button className="btn bg-transparent border-0">Home</button>
              <button className="btn bg-transparent border-0">Home</button>
            </div>
          </motion.div>
        </div>
        <SideBar />
      </div>
    );
};

export default Navbar;