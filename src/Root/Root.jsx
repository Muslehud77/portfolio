
import BannerVideo from '../Components/BannerVideo';
import Navbar from '../Components/Navbar/Navbar';
import AboutMe from '../Sections/AboutMe/AboutMe';


const Root = () => {
    return (
      <div className="overflow-x-hidden ">
        <Navbar/>
        <BannerVideo />
        <AboutMe />
       
      </div>
    );
};

export default Root;