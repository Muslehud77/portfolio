import React from 'react';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

const ContactName = ({email,name,register}) => {
    return (
      <div className="">
        {email && (
          <p>
            Awesome! And what's
            <span className="text-violet-300"> your name?</span>
          </p>
        )}
        {email ? (
          name ? (
            <span className="text-emerald-400 flex gap-2 items-center">
              {" "}
              <IoMdCheckmarkCircleOutline /> {name}{" "}
            </span>
          ) : (
            <div className="md:flex">
              <div className="min-w-fit">
                <p>
                  <span className="text-emerald-400">➜</span>{" "}
                  <span className="text-cyan-300">~</span>{" "}
                  <span className="opacity-50">Enter name: </span>
                </p>
              </div>
              <input
                autoFocus={email ? true : false}
                autoComplete="off"
                {...register("name")}
                className="md:pl-2 border-none outline-none bg-transparent w-full md:max-w-96"
              />
            </div>
          )
        ) : (
          ""
        )}
      </div>
    );
};

export default ContactName;