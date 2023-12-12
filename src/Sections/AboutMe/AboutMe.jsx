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
import LocomotiveScroll from "locomotive-scroll";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger)

const scroll = new LocomotiveScroll();
const AboutMe = () => {

    const section = useRef(null)
    const items = useRef(null)
    const itemsImg = useRef(null)
    const overlay = useRef(null)
    const overlayH1 = useRef(null)

    

    useEffect(()=>{
      
        
        const el = section.current

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            pin: true,
            scrub: 1,
            start: "top top",
            end: "bottom bottom",
          // markers:true
          },
        });

         tl.to(itemsImg.current, { scale: 1,duration:5 }, 2.2);
         tl.to(items.current, { scale: 2, rotate: 0, duration: 5 });

        //  tl.to(".overlay", { height: "100%" }, 0.2);
        //  tl.to(".overlay h1", { scale: 1 }, 0.6);
         tl.to(items.current, { scale: 1.5, opacity: 0.5, duration: 2 }, 2.2);
        
     
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
        className="h-screen bg-gradient-to-bl from-[#0C0A21] to-black section relative w-full overflow-hidden"
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
        <div>
          <h1>AWESOME</h1>
        </div>
      </div>
    );
};

export default AboutMe;