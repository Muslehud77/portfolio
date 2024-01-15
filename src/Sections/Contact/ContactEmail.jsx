/* eslint-disable react/prop-types */

import { useRef } from 'react';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

const ContactEmail = ({ email, register, errors }) => {


  return (
    <div className="">
      <p>
        To start, could you give me{" "}
        <span className="text-violet-300">your email?</span>
      </p>
      {email ? (
        <span className="text-emerald-400 flex gap-2 items-center">
          {" "}
          <IoMdCheckmarkCircleOutline /> {email}{" "}
        </span>
      ) : (
        <div className="md:flex">
          <div className="min-w-fit">
            <p>
              <span className="text-emerald-400">➜</span>{" "}
              <span className="text-cyan-300">~</span>{" "}
              <span className="opacity-50">Enter email: </span>
            </p>
          </div>
          <input
            autoComplete="off"
            {...register("email", {
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              },
            })}
            className="md:pl-2 border-none outline-none bg-transparent w-full md:max-w-96"
          />
        </div>
      )}
      {errors.email && (
        <p className="text-red-400">
          I bet you this is not a valid email address :){" "}
          <span className="text-white">Haha!</span>
        </p>
      )}
    </div>
  );
};

export default ContactEmail;