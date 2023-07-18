'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export default function Nav(): JSX.Element {
  const [isAnimating, setIsAnimating] = useState(true);

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
          setTimeout(() => {
            const link = element.closest('a');
            if (link) {
              window.location.href = link.href;
            }
          }, 500);
        }
      }, 10);
    };

    const handleClick = (event: MouseEvent): void => {
      if (!isAnimating) {
        setIsAnimating(false);
        startAnimation(event.target as HTMLElement);
      }
    };

    const h1Elements = document.querySelectorAll('h1');
    h1Elements.forEach((element) => {
      element.addEventListener('click', handleClick);
    });

    return () => {
      h1Elements.forEach((element) => {
        element.removeEventListener('click', handleClick);
      });
    };
  }, [isAnimating]);

  return (
    <nav className="flex justify-center">
      <div className='mt-10 flex flex-col gap-5 text-[32px]'>
        <div className="mt-4">
          <Link href="/about">
            <h2 data-value="0x /about/" className="flex justify-center">
              <span className="text-[#9F9]">
                0x
              </span>
              <h1 data-value=" /about/">
                0Df648cC52121854c
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
              <h1 data-value=" /journey/">
                2240ad01ea43a83c0
              </h1>
            </h2>
          </Link>
        </div>
        <div className="mt-8">
          <Link href="/projects">
            <h2 className="flex justify-center">
              <span className="text-[#9F9]">
                0x
              </span>
              <h1 data-value=" /projects/">
                e9a86e433bb06a81a
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
              <h1 data-value=" /contact/">
                b1bf881034577e6bF
              </h1>
            </h2>
          </Link>
        </div>
      </div>
    </nav>
  );
}
