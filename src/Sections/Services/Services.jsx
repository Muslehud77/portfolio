import React from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    return (
      <div className="container px-10 py-16 mx-auto">
        <div className="md:flex gap-20">
          <ServiceCard>
            <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
              <h2 className="font-montserrat tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                Front-End
              </h2>
              <h1 className="font-montserrat font-semibold title-font sm:text-2xl text-xl text-gray-900 mb-3">
                Dynamic Front-Ends with React Brilliance!
              </h1>
              <p className="leading-relaxed mb-3 text-gray-500">
                Craft engaging user interfaces that captivate with React.
                Elevate designs, ensure seamless interactions, and redefine user
                experience dynamically.
              </p>
            </div>
          </ServiceCard>

          <ServiceCard>
            <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
              <h2 className="font-montserrat tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                Back-End
              </h2>
              <h1 className="font-montserrat font-semibold title-font sm:text-2xl text-xl text-gray-900 mb-3">
                Robust Back-Ends with Node.js & Express.js Mastery!
              </h1>
              <p className="leading-relaxed mb-3 text-gray-500">
                Empower applications with a solid back-end foundation. Leverage
                Node.js & Express.js for efficient data handling, API
                integrations, and scalable server-side development.
              </p>
            </div>
          </ServiceCard>

          <ServiceCard>
            <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
              <h2 className="font-montserrat tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                Full-Stack Magic
              </h2>
              <h1 className="font-montserrat font-semibold title-font sm:text-2xl text-xl text-gray-900 mb-3">
                React Front-Ends & Node.js Back-Ends Unleashed!
              </h1>
              <p className="leading-relaxed mb-3 text-gray-500">
                Merge captivating interfaces with powerful functionality. From
                MongoDB data storage to Firebase authentication, deliver
                end-to-end solutions with full-stack finesse.
              </p>
            </div>
          </ServiceCard>
        </div>
      </div>
    );
};

export default Services;