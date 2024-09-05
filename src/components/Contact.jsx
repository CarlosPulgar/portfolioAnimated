import React, { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const form = useRef();

  const notify = () => toast.success(" Su mensaje a sido enviado 🎊🎉 ");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_me5cm7y", "template_uxp5p5g", form.current, {
        publicKey: "pBt5zzr-PIlijqgK5",
      })
      .then(
        () => {
          console.log("Datos enviados:", formData);
          setFormData({
            name: "",
            email: "",
            message: "",
          });
          notify()
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const exito = (e) => {
    
  }


  return (
    <motion.section
      id="Contact"
      className="mb-20 sm:mb-28 w-[min(100%, 38rem)]  "
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div>
        <div className=" flex flex-col items-center my-10">
          <h2 className="text-3xl font-medium capitalize mb-8 ">
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              Contacto
            </span>
          </h2>
          <p className="text-gray-300 -mt-6">
            Envia un mail directo haciendo click aqui {""}
            <a
              className="underline hover:text-fuchsia-800"
              href="mailto:carlos911.cp@gmail.com"
            >
              carlos911.cp@gmail.com
            </a>
            {""} o contáctame a través de este formulario
          </p>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="mt-10 flex flex-col items-center "
        >
          <input
            className="h-14 rounded-lg border border-fuchsia-800 w-80 lg:w-2/4 text-black  p-3"
            type="email"
           
            required
            maxLength={500}
            placeholder=" Ingresa tu email"
            name="user_email"
            onChange={manejarCambio}
          />

          <textarea
            className="h-52 my-3 p-3 rounded-lg border border-fuchsia-800 w-80 lg:w-2/4  text-black"
            value={formData.message}
            required
            maxLength={1500}
            placeholder="Tu mensaje"
            name="message"
            onChange={manejarCambio}
          ></textarea>

          <button
            className="group flex gap-2 items-center justify-center h-[3rem] w-[8rem]  bg-fuchsia-800 text-white rounded-full outline-none transition-all
            focus:scale-105
            hover:scale-105
            active:scale-105"
            type="submit"
            value="Send"
           
          >
            Enviar
            <FaPaperPlane
              className="text-xs opacity-70 transition-all
            group-hover:translate-x-1
            group-hover:-translate-y-1
             "
            />
            {""}
          </button>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            transition:Bounce
          />
          {/* { sendEmail ? exito() : ''} */}
        </form>
      </div>
    </motion.section>
  );
};

export default Contact;
