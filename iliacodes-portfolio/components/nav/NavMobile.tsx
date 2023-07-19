'use client';
import { useEffect } from 'react';
import Link from 'next/link';

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export default function Nav(): JSX.Element {

  useEffect(() => {
    const startAnimation = (element: HTMLElement): void => {
      let iteration = 0;
      const originalText = element.dataset.value as string;

      let interval = setInterval(() => {
        element.innerText = originalText
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
      }, 10);
    };

    const h1Elements = document.querySelectorAll('h1');
    h1Elements.forEach((element) => {
      startAnimation(element);
    });
  }, []);

  return (
    <nav className="flex justify-center">
      <div className='mt-10 flex flex-col gap-5 text-[32px]'>
        <div className="mt-4">
          <Link href="/about">
            <h2 data-value="out/" className="flex justify-center">
              <span className="text-[#9F9]">
                0x
              </span>
              <h1 data-value="outb/">
                0Df6
              </h1>
              <h2 className="text-[#9F9]">
                /about/
              </h2>
              <h1 data-value="outb/">
                0Df6
              </h1>
            </h2>
          </Link>
        </div>
        <div className="mt-8">
          <Link href="/journey">
            <h2 data-value="0x /journey/" className="flex justify-center">
              <span className="text-[#9F9]">
                0x
              </span>
              <h1 data-value="ney/">
                2240a
              </h1>
              <h2 className="text-[#9F9]">
                /journey/
              </h2>
              <h1 data-value="ney/">
                2240b
              </h1>
            </h2>
          </Link>
        </div>
        <div className="mt-8">
          <Link href="/projects">
          <h2 data-value="0x /projects/" className="flex justify-center">
              <span className="text-[#9F9]">
                0x
              </span>
              <h1 data-value="ney">
                2240a
              </h1>
              <h2 className="text-[#9F9]">
                /projects/
              </h2>
              <h1 data-value="ney/">
                2240b
              </h1>
            </h2>
          </Link>
        </div>
        <div className="mt-8 mb-4">
          <Link href="/contact">
          <h2 data-value="0x /contact/" className="flex justify-center">
              <span className="text-[#9F9]">
                0x
              </span>
              <h1 data-value="ney/">
                2240a
              </h1>
              <h2 className="text-[#9F9]">
                /contact/
              </h2>
              <h1 data-value="ney/">
                2240b
              </h1>
            </h2>
          </Link>
        </div>
      </div>
    </nav>
  );
}
