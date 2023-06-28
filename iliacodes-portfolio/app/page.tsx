'use client';
import { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import './homePage.css';
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
import { generateRandomString } from './utils';
import { MotionConfig } from 'framer-motion';
import { motion } from 'framer-motion';


export default function Home() {
  const [text, setText] = useState(generateRandomString(12));

  useEffect(() => {
    const handleMouseOver = (event) => {
      let iteration = 0;
      const originalText = event.target.dataset.value;
    
      clearInterval(interval);
    
      const interval = setInterval(() => {
        event.target.innerText = originalText
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
      }, 30);
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
    <main >
      <div className="flex  items-center p-24 box-shadow-[#0F0] blur-[0.5px] text-md sm:text-[24px]">
        <motion.div>
          <TypeAnimation
            sequence={[
              "Wake up user...",
              1000,
              "The blockchain is everywhere...",
              1000,
              "Follow the ledger...",
              1000,
            ]}
            speed={5}
            className="text-[#9F9] font-light tracking-[0.05em] matrix-text scanline pointer-events-none text-[36px]"
            wrapper="span"
            repeat={0}
          />
        </motion.div>
      </div>
      <div className="flex mx-auto justify-evenly">
        <h1 data-value="HYPERPLEXED" className="">
          <span className="text-[#9F9]">
            0x</span>79d2Cd79D
        </h1>
        <h1 data-value="Portfolio" className="">
          <span className="text-[#9F9]">
            0x</span>79d2Cd79D
        </h1>
        <h1 data-value="Journey" className="">
          <span className="text-[#9F9]">
            0x</span>79d2Cd79D
        </h1>
      </div>
    </main>
  );
}