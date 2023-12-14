import img1 from '../../Assets/images/1.jpg'
import img2 from '../../Assets/images/2.jpg'
import img3 from '../../Assets/images/3.jpg'
import img4 from '../../Assets/images/4.jpg'
import img5 from '../../Assets/images/5.jpg'
import img6 from '../../Assets/images/6.jpg'
import img7 from '../../Assets/images/7.jpg'
import img8 from '../../Assets/images/8.jpg'
import img9 from '../../Assets/images/9.jpg'
import img10 from '../../Assets/images/10.jpg'
import img11 from '../../Assets/images/11.jpg'
import img12 from '../../Assets/images/12.jpg'
import img13 from '../../Assets/images/13.jpg'
import img14 from '../../Assets/images/14.jpg'
import img15 from '../../Assets/images/15.jpg'
import img16 from '../../Assets/images/16.jpg'
import img17 from '../../Assets/images/17.jpg'
import img18 from '../../Assets/images/18.jpg'
import img19 from '../../Assets/images/19.jpg'
import img20 from '../../Assets/images/20.jpg'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import {ScrollTrigger} from "gsap/ScrollTrigger"
import TechNologies from './TechNologies'


gsap.registerPlugin(ScrollTrigger)


const AboutMe = () => {

    const section = useRef(null)
    const items = useRef(null)
    const itemsImg = useRef(null)
 

    

    useEffect(()=>{
        gsap.registerPlugin();
        
        const el = section.current

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            pin: true,
            scrub: 1,
            start: "center top",
            end: "bottom top",
         
          },
        });

         tl.to(itemsImg.current, { scale: 1,duration:1 }, 1);
         tl.to(items.current, { scale: 2, rotate: 0, duration: 1 });

        //  tl.to(".overlay", { height: "100%" }, 0.2);
        //  tl.to(".overlay h1", { scale: 1 }, 0.6);
         tl.to(items.current, { scale: 1.5, opacity: 0.5, duration: 2 }, 1);
        
     
    },[])


    const images = [
      img1,
      img2,
      img3,
      img4,
      img5,
      img6,
      img7,
      img8,
      img9,
      img10,
      img11,
      img12,
      img13,
      img14,
      img15,
      img16,
      img17,
      img18,
      img19,
      img20,
      img3,
      img4,
      img5,
      img6,
      img7,
      img10,
      img11,
      img12,
      img13,
      img14,
      img15,
      img16,
      img5,
      img6,
      img7,
      img8,
     
    ];


    return (
      <div
        ref={section}
        className="h-screen  bg-gradient-to-bl from-[#0C0A21] to-black section relative w-full overflow-hidden"
      >
        <div
          ref={items}
          className="flex w-[130%] flex-wrap justify-start items-center absolute top-[50%] left-[50%] aboutTranslate "
        >
          {images.map((img, i) => (
            <div
              className="m-3 h-72 w-60  overflow-hidden transition-all duration-300 hover:scale-105"
              key={i}
            >
              <img
                ref={itemsImg}
                className="opacity-50 scale-105 w-full h-full  transition-all duration-300  object-cover"
                src={img}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row container mx-auto p-10 justify-center items-start h-full">
          <div className="w-full md:w-1/2">
            <h1 className="text-xl md:text-3xl lg:text-5xl font-montserrat font-semibold">
              As a MERN stack developer, I specialize in crafting dynamic
              interfaces with React, employing Tailwind CSS for modern design,
              and utilizing Express.js for robust back-end development. My
              passion lies in creating websites with clean, user-friendly
              experiences.
            </h1>
          </div>
          <div className="w-full md:w-1/2 h-full flex flex-col justify-end">
            <h3 className="text-2xl font-montserrat uppercase">
              Technologies That I'm familiar with
            </h3>
            <div className="w-full h-1 bg-white"></div>
            <TechNologies />
          </div>
        </div>
      </div>
    );
};

export default AboutMe;