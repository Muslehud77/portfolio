import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import loading from "../../Assets/Loading.gif"
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
const Contact = () => {

    const {
      register,
      handleSubmit,
     reset,
      watch,
      formState: { errors },
    } = useForm();

    const refToScroll = useRef(null);

    const [email,setEmail] = useState(null)
    const [name,setName] = useState(null)
    const [description,setDescription] = useState(null)

     const onSubmit = (data) => {
        
       
        setEmail(data?.email)
     
        setName(data?.name)
        setDescription(data?.description)

     };

    const onEnterPress = (e) => {
       if (e.keyCode == 13 && e.shiftKey == false) {
         scroller.scrollTo("actions", {
           duration: 1500,
           delay: 100,
           smooth: "easeInOutQuint",
           containerId: "actions",
         });
          setDescription(e.target.value)
       }
     };

     const resetForm = ()=>{
        reset();
        setName(null);
        setEmail(null);
        setDescription(null);
     }






    return (
      <div
        ref={refToScroll}
        id="form"
        data-lenis-prevent
        className="w-full block relative overflow-auto"
      >
        <section className="px-4 py-12 ">
          <div className="h-96 bg-slate-950/70 backdrop-blur rounded-lg w-full max-w-3xl mx-auto overflow-y-auto shadow-xl cursor-text font-mono">
            <div className="w-full p-3 bg-slate-900 flex items-center gap-1 sticky top-0">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-sm text-slate-200 font-semibold absolute left-[50%] -translate-x-[50%]">
                contact me
              </span>
            </div>
            <div className="p-2 text-slate-100 text-lg">
              <p>Hey there! We're excited to link 🔗</p>

              <form onSubmit={handleSubmit(onSubmit)}>
                {/* email section      */}

                <div className="">
                  <p>
                    To start, could you give us{" "}
                    <span className="text-violet-300">your email?</span>
                  </p>
                  {email ? (
                    <span className="text-emerald-400 flex gap-2 items-center">
                      {" "}
                      <IoMdCheckmarkCircleOutline /> {email}{" "}
                    </span>
                  ) : (
                    <div className="flex">
                      <p>
                        <span className="text-emerald-400">➜</span>{" "}
                        <span className="text-cyan-300">~</span>{" "}
                        <span className="opacity-50">Enter email: </span>
                      </p>
                      <input
                        autoComplete="off"
                        {...register("email", {
                          pattern: {
                            value:
                              /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                          },
                        })}
                        className="pl-2 border-none outline-none bg-transparent max-w-96"
                      />
                    </div>
                  )}
                </div>
                {errors.email && (
                  <p className="text-red-400">
                    I bet you this is not a valid email address :){" "}
                    <span className="text-white">Haha!</span>
                  </p>
                )}
                {/* email section  */}

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
                      <div className="flex">
                        <p>
                          <span className="text-emerald-400">➜</span>{" "}
                          <span className="text-cyan-300">~</span>{" "}
                          <span className="opacity-50">Enter name: </span>
                        </p>
                        <input
                          autoFocus={email ? true : false}
                          autoComplete="off"
                          {...register("name")}
                          className="pl-2 border-none outline-none bg-transparent max-w-7xl"
                        />
                      </div>
                    )
                  ) : (
                    ""
                  )}
                </div>

                {/* description section  */}

                <div className="">
                  {name && (
                    <p>
                      Perfect! And
                      <span className="text-violet-300">
                        {" "}
                        how can I help you?
                      </span>
                    </p>
                  )}

                  {name ? (
                    description ? (
                      <span className="text-emerald-400 flex gap-2 items-center">
                        {" "}
                        <IoMdCheckmarkCircleOutline /> {description}{" "}
                      </span>
                    ) : (
                      <div className="flex w-full">
                        <p className="w-72 md:w-fit">
                          <span className="text-emerald-400">➜</span>{" "}
                          <span className="text-cyan-300">~</span>{" "}
                          <span className="opacity-50">
                            Enter description:{" "}
                          </span>
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
                        <span className="text-blue-300">description: </span>{" "}
                        {description}
                      </p>
                      <p>Look good?</p>
                    </>
                  )}
                </div>
              </form>
              {description && (
                <div id="actions" className="flex gap-2 mt-2">
                  <button
                    onClick={resetForm}
                    className="btn bg-white btn-sm capitalize"
                  >
                    Restart
                  </button>
                  <button className="btn bg-blue-500 text-white  btn-sm capitalize">
                    Send it!
                  </button>
                </div>
              )}
              <img className="w-28" src={loading} />
            </div>
          </div>
        </section>
      </div>
    );
};

export default Contact;