import { useEffect, useState } from 'react';
import logo from '../../Assets/logo/logo-only.svg'
import { SideBar } from './Hamburger/SideBar';



const Navbar = () => {

    const [hidden,setHidden] = useState(true)
    const banner = document.querySelector('#mainBanner')
   
   
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
      <div className="fixed inset-0 z-50">
        <div
          className={`flex justify-center items-center transition-all duration-500 mt-5 ${
            hidden ? "opacity-100 " : "opacity-0 "
          }`}
        >
          <a target="_black" href="https://github.com/Muslehud77">
            <img className=" w-20" src={logo} />
          </a>
        </div>
        <div
          className={`flex ${
            hidden
              ? "justify-center w-screen"
              : "justify-end w-full absolute top-0"
          } transition-all duration-500 items-center mt-5`}
        >
          <div className="flex transition-all duration-300 border rounded-md border-[#151843] backdrop-blur-sm">
            <button className="btn bg-transparent border-0">Home</button>
            <button className="btn bg-transparent border-0">Home</button>
            <button className="btn bg-transparent border-0">Home</button>
            <button className="btn bg-transparent border-0">Home</button>
            <button className="btn bg-transparent border-0">Home</button>
          
          </div>
        </div>
        <SideBar />
      </div>
    );
};

export default Navbar;