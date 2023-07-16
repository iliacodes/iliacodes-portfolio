'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import SubHeader from '../../components/SubHeader';
import dynamic from 'next/dynamic';
import { PiGithubLogoBold } from 'react-icons/pi';
import {TbWorldShare} from 'react-icons/tb';
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
import {SiTailwindcss, SiSolidity, SiReact} from 'react-icons/si';
import Footer from '../../components/Footer';


const Mythos = () => {
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
    <>
      <div>
        <div className="flex-col items-center justify-center">
          <Header />
          <SubHeader />
          <div className="my-32">
            <h2 className="sm:text-[18px] text-[16px] text-[#D2E2DF] uppercase tracking-wider p-5 xl:mx-64 xl:p-0 flex">
              <Link href="fan-connect" className="mr-5">
                  FanConnect /
              </Link>
              <Link href="moonshot" className="mx-5 ">
                  Moonshot /
              </Link>
              <Link href="mythos" className="mx-5 text-[#9F9]">
                  Mythos /
              </Link>
            </h2>
            <h1 className="text-white md:text-[60px] sm:text-[50px] text-[40px] p-5 xl:mx-64 xl:p-0" data-value="Mythos.">Mythos.</h1>
            <h2 className="sm:text-[32px] text-[20px] text-[#D2E2DF] uppercase tracking-wider p-5 xl:mx-64 xl:p-0 flex items-center mb-12">
              <div className="text-[24px]">
                Built with:
              </div>
              <div className="mx-10 text-[#61DBFB]" title="React">
                <SiReact />
              </div>
              <div className="text-blue-400" title="Tailwindcss">
                <SiTailwindcss />
              </div>
            </h2>
            <h2 className="sm:text-[32px] text-[20px] text-[#D2E2DF] uppercase tracking-wider p-5 xl:mx-64 xl:p-0 flex ">
              <div className="text-[24px]">
                Links:
              </div>
              <Link href="https://playmythos.com">
              <div className="mx-10" title="playmythos.com">
                <TbWorldShare />
              </div>
              </Link>
              <div className="text-[#646665]" title="Private repository">
                <PiGithubLogoBold />
              </div>
            </h2>
          </div>
          <div className="sm:text-[22px] text-[18px] text-[#D2E2DF] uppercase tracking-wider xl:mx-64 xl:p-0 flex-col justify-center ">
            <h2 className="sm:mx-24 md:mx-32 xl:mx-0 mx-12 mb-16 text-[#D2E2DF]">
              Mythos is a browser based game built in unity. Users can battle NPC's other users and earn rewards completing quests in the galaxies.
            </h2>
            <h2 className="lowercase sm:mx-24 md:mx-32 xl:mx-0 mx-12 mb-16 font-bold text-white">
              currently:
            </h2>
            <h3 className="sm:mx-24 md:mx-32 xl:mx-0 mx-12 mb-16 text-red-400">
              Games monitize users by selling in game items and charging for in game currency. These assets are never owned by the user and has no value outside of the game.
            </h3>
            <h2 className="lowercase sm:mx-24 md:mx-32 xl:mx-0 mx-12 mb-16 font-bold text-white">
              mythos:
            </h2>
            <h3 className="sm:mx-24 md:mx-32 xl:mx-0 mx-12 mb-16 text-purple-400">
              Mythos will alow users to own their NFT's which provide specific boosts depending on the faction. Users will also be able to gain rewards and purchase items in-game. They then will be able to sell these items on the marketplace to other users.
            </h3>
          </div>
        </div>
        <Footer />
      </div>

    </>
  );
};

export default dynamic (() => Promise.resolve(Mythos), {ssr: false})
