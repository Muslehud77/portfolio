import img1 from '../../Assets/technologies/1.png'
import img2 from '../../Assets/technologies/2.png'
import img3 from '../../Assets/technologies/3.png'
import img4 from '../../Assets/technologies/4.png'
import img5 from '../../Assets/technologies/5.png'
import img6 from '../../Assets/technologies/6.png'
import img7 from '../../Assets/technologies/7.png'
import img8 from '../../Assets/technologies/8.png'
import img9 from '../../Assets/technologies/9.png'
import Reveal from '../../Components/Reveal/Reveal'

const TechNologies = () => {

    const cls = 'w-8 h-8 md:w-16 md:h-16 hover:scale-110 transition-all duration-2 object-cover bg-black relative rounded'

    return (
      <Reveal>
        <div className="flex flex-wrap justify-center items-center gap-2 mt-2 ">
          <img className={cls} src={img1}></img>
          <img className={cls} src={img2}></img>
          <img className={cls} src={img3}></img>
          <img className={cls} src={img4}></img>
          <img className={cls} src={img5}></img>
          <img className={cls} src={img6}></img>
          <img className={cls} src={img7}></img>
          <img className={cls} src={img8}></img>
          <img className={cls} src={img9}></img>
        </div>
      </Reveal>
    );
};

export default TechNologies;