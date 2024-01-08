import Reveal from "../../Components/Reveal/Reveal";


const ServiceHead = () => {
    return (
      <div className="container mx-auto px-10 mb-6 lg:mb-0">
        <Reveal>
          <div className="flex flex-col justify-end items-end w-full">
            <h1 className="text-3xl text-right font-montserrat md:text-5xl font-medium title-font mb-2 text-white">
              My Services
            </h1>
            <div className="h-1 w-20 bg-white rounded"></div>
          </div>
        </Reveal>
      </div>
    );
};

export default ServiceHead;