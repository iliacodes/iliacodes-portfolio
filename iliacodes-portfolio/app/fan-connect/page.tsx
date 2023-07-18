'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import SubHeader from '../../components/SubHeader';
import dynamic from 'next/dynamic';
import { PiGithubLogoBold } from 'react-icons/pi';
import { TbWorldShare } from 'react-icons/tb';
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
import { SiTailwindcss, SiSolidity, SiReact, SiNextdotjs, SiTypescript } from 'react-icons/si';
import { BiHardHat } from 'react-icons/bi';
import wagmi from '../../public/wagmi.png';
import Image from 'next/image';
import viem from '../../public/viem.png';
import siwe from '../../public/siwe.png';
import Footer from '../../components/Footer';


const FanConnect = () => {
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
            <h2 className="sm:text-[18px] text-[16px] text-[#D2E2DF] uppercase tracking-wider p-5 xl:mx-64 xl:p-0 flex items-center">
              <Link href="fan-connect" className="mr-5 border border-white p-2">
                FanConnect <span className="sm:block hidden">/</span>
              </Link>
              <Link href="moonshot" className="mx-5 p-2">
                Moonshot <span className="sm:block hidden">/</span>
              </Link>
              <Link href="mythos" className="mx-5 p-2">
                Mythos <span className="sm:block hidden">/</span>
              </Link>
            </h2>
            <h1 className="text-white md:text-[60px] sm:text-[50px] text-[40px] p-5 xl:mx-64 xl:p-0" data-value="Fan-Connect.">Fan-Connect.</h1>
            <div className="text-[24px] uppercase tracking-wider p-5 xl:mx-64 xl:p-0 mb-5">
              Built with:
            </div>
            <h2 className="sm:text-[32px] text-[20px] text-[#D2E2DF] uppercase tracking-wider p-5 xl:mx-64 xl:p-0 flex items-center mb-12 flex-wrap gap-5">
              <div className="mx-5 text-[#61DBFB] z-10" >
                <SiReact title="React" />
              </div>
              <div className="text-blue-400 z-10 mx-5" >
                <SiTailwindcss title="Tailwindcss" />
              </div>
              <div className="mx-5 text-[#C0C0C0] z-10" >
                <SiSolidity title="Solidity" />
              </div>
              <div className="text-[#C0C0C0] z-10 mx-5" >
                <SiNextdotjs title="Nextjs" />
              </div>
              <div className="mx-5 text-[#FFFF00]" >
                <BiHardHat title="Hardhat" />
              </div>
              <div title="wagmi" className="mx-5">
                <Image src={wagmi} alt="wagmi" className="w-10 h-10" />
              </div>
              <div className="mx-5" title="viem">
                <Image src={viem} alt="viem" className="w-8 h-8" />
              </div>
              <div title="spruceId/siwe" className="mx-5">
                <Image src={siwe} alt="siwe" className="w-8 h-8" />
              </div>
              <div className="mx-5 text-[#007acc]">
                <SiTypescript title="Typescript" />
              </div>
            </h2>
            <h2 className="sm:text-[32px] text-[20px] text-[#D2E2DF] uppercase tracking-wider p-5 xl:mx-64 xl:p-0 flex items-center">
              <div className="text-[24px]">
                Links:
              </div>
              <Link href="https://fan-connect.vercel.app/" target="_blank">
                <div className="mx-10" title="Deployed site">
                  <TbWorldShare />
                </div>
              </Link>
              <Link href="https://github.com/encode-solidity-group/fan-connect" target="_blank">
                <div title="Repository">
                  < PiGithubLogoBold />
                </div>
              </Link>
            </h2>
          </div>
          <div className="sm:text-[22px] text-[18px] text-[#D2E2DF] uppercase tracking-wider xl:mx-64 xl:p-0 flex-col justify-center">
            <h2 className="sm:mx-24 md:mx-32 xl:mx-0 mx-12 mb-16 text-[#D2E2DF]">
              Fan-Connect is a blockchain-based platform, deployed on the Aurora mainnet, designed to create a direct, meaningful connection between creators and their subscribers.
            </h2>
            <div className="items-center justify-center mb-5 mx-5 hidden sm:block sm:mx-24 md:mx-32 xl:mx-0 ">
              <Image src="/LandingPage.png" alt="LandingPage" width={1200} height={100} className="w-400 h-100" />
            </div>
            <div className="block items-center justify-center mb-5 mx-5 sm:hidden">
              <Image src="/smallSize.png" alt="LandingPage" width={800} height={100} className="w-400 h-100" />
            </div>
            <h2 className="lowercase sm:mx-24 md:mx-32 xl:mx-0 mx-12 mb-16 font-bold text-white">
              currently:
            </h2>
            <h3 className="sm:mx-24 md:mx-32 xl:mx-0 mx-12 mb-16 text-red-400">
              A creator gets charged up to 20% of revenue and waits multiple days for payments to process.
            </h3>
            <h3 className="sm:mx-24 md:mx-32 xl:mx-0 mx-12 mb-16 text-purple-400">
              The creator has a link to a known brand that users trust.
            </h3>
            <h2 className="lowercase sm:mx-24 md:mx-32 xl:mx-0 mx-12 mb-16 font-bold text-white">
              fan-connect:
            </h2>
            <h3 className="sm:mx-24 md:mx-32 xl:mx-0 mx-12 mb-16 text-purple-400">
              secure payments, Low subsription fees, 0% transaction fees for tips. Funds begin processing instantly to creators wallet.
            </h3>
            <div className="items-center justify-center mb-5 mx-5 hidden sm:block sm:mx-24 md:mx-32 xl:mx-0 ">
              <Image src="/fan-connect.png" alt="LandingPage" width={1000} height={100} className="w-400 h-100" />
            </div>
            <div className="block items-center justify-center mb-5 mx-5 sm:hidden">
              <Image src="/subscribers.png" alt="LandingPage" width={800} height={100} className="w-400 h-100" />
            </div>
          </div>
        </div>
        <Footer />
      </div>

    </>
  );
};

export default dynamic(() => Promise.resolve(FanConnect), { ssr: false });
