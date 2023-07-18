'use client';
import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
import Test2 from '../components/Particles';



const ContactForm = () => {
  useEffect(() => {
    const handleMouseOver = (event: MouseEvent) => {
      let iteration = 0;
      const originalText = (event.target as HTMLElement).dataset.value as string;

      let interval = setInterval(() => {
        (event.target as HTMLElement).innerText = originalText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return originalText[index];
            }

            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");

        if (iteration >= originalText.length) {
          clearInterval(interval);
        }

        iteration += 1 / 5;
      }, 10);
    };

    const h1Elements = document.querySelectorAll('h1');
    h1Elements.forEach((element) => {
      element.addEventListener('mouseover', handleMouseOver);
    });

    return () => {
      h1Elements.forEach((element) => {
        element.removeEventListener('mouseover', handleMouseOver);
      });
    };
  }, []);

  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);


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
          setSubmitted(true);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Oh no! Something went wrong, please try again.");
        }
      );
  };

  return (
    <div className="flex xl:flex-row flex-col-reverse  overflow-hidden">
      {submitted ? (
        <Test2
          showAnimation={true}
        />
      ) : (
        <div
          className="flex-[1] bg-[#072A24]-100 rounded-2xl relative z-10 my-28">
          <p className="sm:text-[18px] text-[16px] text-[#D2E2DF] uppercase tracking-wider p-5 xl:mx-64 xl:p-0">Get in touch</p>
          <h1 className="text-white md:text-[60px] sm:text-[50px] text-[40px] p-5 xl:mx-64 xl:p-0" data-value="Contact.">Contact.</h1>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-12 flex flex-col gap-8 sm:mx-24 mx-8 xl:mx-64'
          >
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Name</span>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="Your name here."
                className='bg-black py-4 px-6 placeholder:text-[#D2E2DF] text-white rounded-lg outline-[#072A24] border-none font-medium'
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
                className='bg-black py-4 px-6 placeholder:text-[#D2E2DF] text-white rounded-lg outline-[#072A24] border-none font-medium'
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
                className='bg-black py-4 px-6 placeholder:text-[#D2E2DF] text-white rounded-lg outline-[#072A24] border-none font-medium'
              />
            </label>

            <button
              type='submit'
              className='bg-[#D2E2DF] py-3 px-8 rounded-xl outline-[none] w-fit text-[#072A24] font-bold'
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ContactForm;