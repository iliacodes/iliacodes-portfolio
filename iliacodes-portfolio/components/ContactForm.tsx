'use client';
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { slideIn } from "./utils/motion";
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";


const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };



  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_6qaqf9f",
        "template_iaoi42k",
        {
          from_name: form.name,
          to_name: "iliaCodes",
          from_email: form.email,
          to_email: "ilia.o.tcherkassov@gmail.com",
          message: form.message,
        },
        "CgX7Mi1qM8YJjln1W"
      )
      .then(
        () => {
          setLoading(false);
          toast.success("Thank you. I will respond within 48 hours.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Oh no! Something went wrong, please try again.");
        }
      );
  };

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[1] bg-[#072A24]-100 p-8 rounded-2xl relative z-10"
      >
        <p className="sm:text-[18px] text-[14px] text-[#D2E2DF] uppercase tracking-wider">Get in touch</p>
        <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="Your name here."
              className='bg-black py-4 px-6 placeholder:text-[#9BCFB8] text-white rounded-lg outline-[#072A24] border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="Your web address here."
              className='bg-black py-4 px-6 placeholder:text-[#9BCFB8] text-white rounded-lg outline-[#072A24] border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What would you like to say?'
              className='bg-black py-4 px-6 placeholder:text-[#9BCFB8] text-white rounded-lg outline-[#072A24] border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-[#8DB6A8] py-3 px-8 rounded-xl outline-[none] w-fit text-[#072A24] font-bold'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactForm;