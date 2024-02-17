import img1 from '../../Assets/technologies/1.png'
import img2 from '../../Assets/technologies/2.png'
import img3 from '../../Assets/technologies/3.png'
import img4 from '../../Assets/technologies/4.png'
import img5 from '../../Assets/technologies/5.png'
import img6 from '../../Assets/technologies/6.png'
import img7 from '../../Assets/technologies/7.png'
import img8 from '../../Assets/technologies/8.png'
import img9 from '../../Assets/technologies/9.png'
import img10 from '../../Assets/technologies/10.png'

import { AnimatedTooltip } from '../../Components/Tooltip/Tooltip'
import { useState } from 'react'
import Reveal from '../../Components/Reveal/Reveal'

const TechNologies = () => {

const [overflow,setOverflow] = useState(true)
    
    const tech = [
      {
        id: 1,
        name: "React",
        proficiency: "Expert",
        image:img1
      },
      {
        id: 2,
        name: "JavaScript",
        proficiency: "Comfortable",
        image:img2
      },
      {
        id: 3,
        name: "NodeJs",
        proficiency: "Comfortable",
        image:img3
      },
      {
        id: 4,
        name: "ExpressJs",
        proficiency: "Comfortable",
        image:img4
      },
      {
        id: 5,
        name: "MongoDB",
        proficiency: "Comfortable",
        image:img5
      },
      {
        id: 6,
        name: "Firebase Auth",
        proficiency: "Expert",
        image:img6
      },
      {
        id: 7,
        name: "TailwindCSS",
        proficiency: "Expert",
        image:img7
      },
      {
        id: 8,
        name: "TanstackQuery",
        proficiency: "Comfortable",
        image:img8
      },
      {
        id: 9,
        name: "FramerMotion",
        proficiency: "Comfortable",
        image:img9
      },
      {
        id: 10,
        name: "Redux",
        proficiency: "Comfortable",
        image:img10
      },
    ];
    return (
      <Reveal overflow={overflow}>
        <div className="flex flex-wrap justify-center items-center gap-2 mt-2 ">
          <AnimatedTooltip
            overflow={overflow}
            setOverflow={setOverflow}
            items={tech}
          />
        </div>
      </Reveal>
    );
};

export default TechNologies;






