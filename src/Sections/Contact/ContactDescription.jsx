import React from 'react';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

const ContactDescription = ({name,description,onEnterPress,email,register}) => {
    return (
      <div className="">
        {name && (
          <p>
            Perfect! And
            <span className="text-violet-300"> how can I help you?</span>
          </p>
        )}

        {name ? (
          description ? (
            <span className="text-emerald-400 flex gap-2 items-center">
              {" "}
              <IoMdCheckmarkCircleOutline /> {description}{" "}
            </span>
          ) : (
            <div className="md:flex w-full">
             
              <p className="min-w-fit">
                <span className="text-emerald-400">➜</span>{" "}
                <span className="text-cyan-300">~</span>{" "}
                <span className="opacity-50">Enter description: </span>
              </p>
              <textarea
                style={{ resize: "none" }}
                onKeyDown={onEnterPress}
                autoFocus={email ? true : false}
                autoComplete="off"
                {...register("description")}
                className="pl-2 border-none outline-none bg-transparent w-8/12 max-w-2xl"
              />
            </div>
          )
        ) : (
          <></>
        )}
        {description && (
          <>
            <p>Excellent! Here is what i've got:</p>
            <p>
              <span className="text-blue-300">email: </span> {email}
            </p>
            <p>
              <span className="text-blue-300">name: </span> {name}
            </p>
            <p>
              <span className="text-blue-300">description: </span> {description}
            </p>
            <p>Look good?</p>
          </>
        )}
      </div>
    );
};

export default ContactDescription;