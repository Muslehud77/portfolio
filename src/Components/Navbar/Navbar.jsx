import { useEffect, useState } from 'react';

import { SideBar } from './Hamburger/SideBar';
import LogoSvg from './LogoSvg';
import { motion } from 'framer-motion';
import Menus from './Menus';



const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
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
      <div className={`fixed inset-0 z-50 ${!isOpen ? "h-20" : ""} `}>
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
        <div className="hidden  fixed right-0 bottom-0 lg:flex justify-center items-center">
          <Menus hidden={hidden} />
        </div>
        <div className='lg:hidden'>
         
          <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
    );
};

export default Navbar;