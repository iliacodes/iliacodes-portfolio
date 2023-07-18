'use client';
import { useEffect } from 'react';
import Link from 'next/link';
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
import { motion } from 'framer-motion';

type Direction = "left" | "right" | "up" | "down";

export const fadeIn = (direction: Direction, type: string, delay: number, duration: number) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type || 'spring',
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};


export default function Nav() {
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

  return (
    <nav className="flex items-center justify-center">
      <div className='mx-8 mt-10 sm:mt-20 flex flex-wrap sm:gap-5 sm:p-10 lg:mx-24 xl:mx-48 gap-5 sm:text-[18px] justify-evenly'>
        <motion.div
          variants={fadeIn("right", "", 0.1, 1)}
        >
          <div className="flex items-center p-2 sm:p-10 m-5">
            <h2 className="md:w-[200px] w-[109px] sm:w-[150px]">
              <span className="text-[#9F9]">
                0x
              </span>
              caecad0Df
            </h2>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("right", "", 0.1, 1)}
        >
        <div className="flex items-center p-2 sm:p-10 m-5">
          <Link href="/about">
            <h1 data-value="about/" className="md:w-[200px] sm:w-[150px] w-[109px]">
              <span className="text-[#9F9]">
                0x
              </span>
              9f333a11a
            </h1>
          </Link>
        </div>
        </motion.div>
        <motion.div
          variants={fadeIn("right", "", 0.1, 1)}
        >
        <div className="flex items-center p-2 sm:p-10 m-5">
          <h2 className="md:w-[200px] w-[109px] sm:w-[150px]">
            <span className="text-[#9F9]">
              0x
            </span>
            79d2Cd79D
          </h2>
        </div>
        </motion.div>
        <motion.div
          variants={fadeIn("right", "", 0.1, 1)}
        >
        <div className="flex items-center p-2 sm:p-10 m-5">
          <Link href="/journey">
            <h1 data-value="journey/" className="md:w-[200px] w-[109px] sm:w-[150px]">
              <span className="text-[#9F9]">
                0x
              </span>
              8a60232aB
            </h1>
          </Link>
        </div>
        </motion.div>
        <motion.div
          variants={fadeIn("right", "", 0.1, 1)}
        >
        <div className="flex items-center p-2 sm:p-10 m-5 ">
          <h2 className="md:w-[200px] w-[109px] sm:w-[150px]">
            <span className="text-[#9F9]">
              0x
            </span>
            787dc355f
          </h2>
        </div>
        </motion.div>
        <motion.div
          variants={fadeIn("right", "", 0.1, 1)}
        >
        <div className="flex items-center p-2 sm:p-10 m-5">
          <h2 className="md:w-[200px] w-[109px] sm:w-[150px]">
            <span className="text-[#9F9]">
              0x
            </span>
            a4630e238
          </h2>
        </div>
        </motion.div>
        <motion.div
          variants={fadeIn("right", "", 0.1, 1)}
        >
        <div className="flex items-center  p-2 sm:p-10 m-5">
          <Link href="/projects">
            <h1 data-value="projects/" className="md:w-[200px] w-[109px] sm:w-[150px]">
              <span className="text-[#9F9] ">
                0x
              </span>
              8Y4bD2CE
            </h1>
          </Link>
        </div>
        </motion.div>
        <motion.div
          variants={fadeIn("right", "", 0.1, 1)}
        >
        <div className="flex items-center 50 p-2 sm:p-10 m-5">
          <h2 className="md:w-[200px] w-[109px] sm:w-[150px]">
            <span className="text-[#9F9]">
              0x
            </span>
            79p2yu69F
          </h2>
        </div>
        </motion.div>
        <motion.div
          variants={fadeIn("right", "", 0.1, 1)}
        >
        <div className="flex items-center p-2 sm:p-10 m-5">
          <h2 className="md:w-[200px] w-[109px] sm:w-[150px]">
            <span className="text-[#9F9]">
              0x
            </span>
            22d2zdp9K
          </h2>
        </div>
        </motion.div>
        <motion.div
          variants={fadeIn("right", "", 0.1, 1)}
        >
        <div className="flex items-center p-2 sm:p-10 m-5">
          <Link href="/contact">
            <h1 data-value="contact/" className="md:w-[200px] w-[109px] sm:w-[150px]">
              <span className="text-[#9F9]">
                0x
              </span>
              oP02Fg31A
            </h1>
          </Link>
        </div>
        </motion.div>
        <motion.div
          variants={fadeIn("right", "", 0.1, 1)}
        >
        <div className="flex items-center p-2 sm:p-10 m-5">
          <h2 className="md:w-[200px] w-[109px] sm:w-[150px]">
            <span className="text-[#9F9]">
              0x
            </span>
            KklI1ms1
          </h2>
        </div>
        </motion.div>
        <div className="flex items-center p-2 sm:p-10 m-5">
          <h2 className="md:w-[200px] w-[109px] sm:w-[150px]">
            <span className="text-[#9F9]">
              0x
            </span>
            79d2Gh6Ac
          </h2>
        </div>
        <div className="items-center p-2 sm:p-10 m-5 hidden 2xl:block">
          <h2 className="md:w-[200px] w-[109px] sm:w-[150px]">
            <span className="text-[#9F9]">
              0x
            </span>
            8a60232eF
          </h2>
        </div>
        <div className="items-center p-2 sm:p-10 m-5 hidden 2xl:block">
          <h2 className="md:w-[200px] w-[109px] sm:w-[150px]">
            <span className="text-[#9F9]">
              0x
            </span>
            8318db26e
          </h2>
        </div>
        <div className="items-center p-2 sm:p-10 m-5 hidden 2xl:block">
          <h2 className="md:w-[200px] w-[109px] sm:w-[150px]">
            <span className="text-[#9F9]">
              0x
            </span>
            B21cd0819
          </h2>
        </div>
        <div className="items-center p-2 sm:p-10 m-5 hidden 2xl:block">
          <h2 className="md:w-[200px] w-[109px] sm:w-[150px]">
            <span className="text-[#9F9]">
              0x
            </span>
            e28bb477c
          </h2>
        </div>
        <div className="items-center p-2 sm:p-10 m-5 hidden 2xl:block">
          <h2 className="md:w-[200px] w-[109px] sm:w-[150px]">
            <span className="text-[#9F9]">
              0x
            </span>
            755c2fe82
          </h2>
        </div>
        <div className="items-center p-2 sm:p-10 m-5 hidden 2xl:block">
          <h2 className="md:w-[200px] w-[109px] sm:w-[150px]">
            <span className="text-[#9F9]">
              0x
            </span>
            c5cb5c9a9
          </h2>
        </div>
      </div>
    </nav>
  );
}