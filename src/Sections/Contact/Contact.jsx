import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Typewriter from "typewriter-effect";

import loader from "../../Assets/Loading.gif";
import emailjs from "@emailjs/browser";
import ContactActions from "./ContactActions";
import ContactDescription from "./ContactDescription";
import ContactName from "./ContactName";
import ContactEmail from "./ContactEmail";
import Reveal from "../../Components/Reveal/Reveal";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm();

  const refToScroll = useRef(null);
  const success = useRef(null);
  const form = useRef(null);
  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);
  const [description, setDescription] = useState(null);
  const [loading, setLoading] = useState(false);
  const [sent,setSent] = useState(false);

  const onSubmit = (data) => {
    setEmail(data?.email);

    setName(data?.name);
    setDescription(data?.description);
  };

  const onEnterPress =  (e) => {
    if (e.keyCode == 13 && e.shiftKey == false) {
    setDescription(e.target.value);
      setTimeout(() => {
        refToScroll.current.scrollIntoView({
          block: "start",
        });
      }, 0);
    }
  };

  const resetForm = () => {
    
    reset();
    setSent(false);
    setName(null);
    setEmail(null);
    setDescription(null);
  };


 


  const sendEmail = () => {
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_emailjs_serviceId, // service id
        import.meta.env.VITE_emailjs_templateId, //template id
        { email, name, description },
        import.meta.env.VITE_emailjs_public_key //public key
      )
      .then(
        (result) => {
          setSent(true)
          setLoading(false);
          setTimeout(() => {
             success.current.scrollIntoView({
               block: "start",
             });
          }, 0);
          console.log(result.text);
        },
        (error) => {
         
          setLoading(false);
          console.log(error.text);
        }
      );
  };

  return (
    <div id="Contact" className="w-full block relative mt-10">
      <section className="px-4 py-12 ">
        <Reveal>
          {" "}
          <div
            data-lenis-prevent
            className="h-96 bg-slate-950/70 backdrop-blur rounded-lg w-full max-w-3xl mx-auto  overflow-x-hidden overflow-y-auto shadow-xl cursor-text font-mono"
          >
            <div className="w-full p-3 bg-slate-900 flex items-center gap-1 sticky top-0">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-sm text-slate-200 font-semibold absolute left-[50%] -translate-x-[50%]">
                contact me
              </span>
            </div>

            <div className="p-2 text-slate-100 text-lg">
              <p>Hey there! I'am excited to link 🔗</p>

              <form ref={form} onSubmit={handleSubmit(onSubmit)}>
                {/* email section      */}

                <ContactEmail
                  email={email}
                  register={register}
                  errors={errors}
                />

                {/* name section  */}

                <ContactName email={email} name={name} register={register} />

                {/* description section  */}

                <ContactDescription
                  name={name}
                  description={description}
                  onEnterPress={onEnterPress}
                  email={email}
                  register={register}
                />
              </form>
              {/* actions */}
              {!loading && !sent && (
                <ContactActions
                  refToScroll={refToScroll}
                  description={description}
                  resetForm={resetForm}
                  sendEmail={sendEmail}
                />
              )}
              {/* loading */}
              {loading && <img className="w-28 mt-2" src={loader} />}

              {/* success */}

              {sent && (
                <div ref={success} className="text-emerald-400">
                  <Typewriter
                    options={{
                      strings: ["Yay! Your message has been sent!"],
                      autoStart: sent,
                      onRemoveNode: resetForm,
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
};

export default Contact;
