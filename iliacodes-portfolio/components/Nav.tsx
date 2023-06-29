'use client';
import { useEffect } from 'react';
import Link from 'next/link';
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
import { motion } from 'framer-motion';
import { Logo } from './svg'


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
    <nav className="flex justify-evenly flex-col items-end">
        <div className="flex items-center border border-green-50 p-10 m-5">
        <Link href="/about">
          <h1 data-value=" About " className="p-2">
            <span className="text-[#9F9]">
              0x
            </span>
            79d2Cd79D
          </h1>
        </Link>
      </div>
      <div className="flex items-center border border-green-50 p-10 m-5">
        <Link href="/journey">
          <h1 data-value=" Journey " className="p-2">
            <span className="text-[#9F9]">
              0x
            </span>
            79d2Cd79D
          </h1>
        </Link>
      </div>
      <div className="flex items-center border border-green-50 p-10 m-5">
        <Link href="/projects">
          <h1 data-value="Projects" className="p-2 border border-red-50">
            <span className="text-[#9F9] ">
              0x
            </span>
            79d2Cd79D
          </h1>
        </Link>
      </div>
      <div className="flex items-center border border-green-50 p-10 m-5">
        <Link href="/contact">
          <h1 data-value=" Contact " className="p-2">
            <span className="text-[#9F9]">
              0x
            </span>
            79d2Cd79D
          </h1>
        </Link>
      </div>
    </nav>
  );
}