'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import SubHeader from '../../components/SubHeader';
import dynamic from 'next/dynamic';
import { PiGithubLogoBold } from 'react-icons/pi';
import { TbWorldShare } from 'react-icons/tb';
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
import { SiReact, SiExpress, SiPostgresql, SiAxios, SiBootstrap, SiSass } from 'react-icons/si';
import Footer from '../../components/Footer';
import Image from 'next/image';

const Moonshot = () => {
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
              <Link href="fan-connect" className="mr-5 p-2">
                FanConnect <span className="sm:block hidden">/</span>
              </Link>
              <Link href="moonshot" className="mx-5 border border-white p-2">
                Moonshot <span className="sm:block hidden">/</span>
              </Link>
              <Link href="mythos" className="mx-5 p-2">
                Mythos <span className="sm:block hidden">/</span>
              </Link>
            </h2>
            <h1 className="text-white md:text-[60px] sm:text-[50px] text-[40px] p-5 xl:mx-64 xl:p-0" data-value="Moonshot.">Moonshot.</h1>
            <div className="text-[24px] uppercase tracking-wider p-5 xl:mx-64 xl:p-0 mb-5">
              Built with:
            </div>
            <h2 className="sm:text-[32px] text-[20px] text-[#D2E2DF] uppercase tracking-wider p-5 xl:mx-64 xl:p-0 mb-12 flex items-center">
              <div className="mx-10 text-[#61DBFB]">
                <SiReact title="React" />
              </div>
              <div >
                <SiExpress title="Express js" />
              </div>
              <div className="mx-10 text-[#0064a5]" >
                <SiPostgresql title="SQL" />
              </div>
              <div>
                <SiAxios title="Axios" />
              </div>
              <div className="text-[#563d7c] mx-10">
                <SiBootstrap title="Bootstrap" />
              </div>
              <div className="text-[#CD6799]">
                <SiSass title="Sass" />
              </div>
            </h2>
            <h2 className="sm:text-[32px] text-[20px] text-[#D2E2DF] uppercase tracking-wider p-5 xl:mx-64 xl:p-0 flex items-center">
              <div className="text-[24px]">
                Links:
              </div>
              <div className="mx-10 text-[#646665]">
                <TbWorldShare title="Site not deployed" />
              </div>
              <Link href="https://github.com/iliacodes/MoonShot" target="_blank">
                <div>
                  < PiGithubLogoBold title="Repository" />
                </div>
              </Link>
            </h2>
          </div>
          <div className="sm:text-[22px] text-[18px] text-[#D2E2DF] uppercase tracking-wider xl:mx-64 xl:p-0 flex-col justify-center ">
            <h2 className="sm:mx-24 md:mx-32 xl:mx-0 mx-12 mb-16 text-[#D2E2DF]">
              Moonshot is a platform that allows users to track real-time prices accross a variety of assets including cryptocurrencies, stocks, and NFT&apos;s.
            </h2>
            <div className="items-center justify-center mb-5 mx-5 flex sm:mx-24 md:mx-32 xl:mx-0">
              <Image src="/general.gif" alt="LandingPage" width={1000} height={100} />
            </div>
            <h2 className="lowercase sm:mx-24 md:mx-32 xl:mx-0 mx-12 mb-16 font-bold text-white">
              currently:
            </h2>
            <h3 className="sm:mx-24 md:mx-32 xl:mx-0 mx-12 mb-16 text-red-400">
              There are only crypto agnostic or stock specific platforms.
            </h3>
            <h3 className="sm:mx-24 md:mx-32 xl:mx-0 mx-12 mb-16 text-purple-400">
              Detailed price tracking available on TradingView, but does not include NFT&apos;s.
            </h3>
            <h2 className="lowercase sm:mx-24 md:mx-32 xl:mx-0 mx-12 mb-16 font-bold text-white">
              moonshot:
            </h2>
            <h3 className="sm:mx-24 md:mx-32 xl:mx-0 mx-12 mb-16 text-purple-400">
              track stocks, crypto, and NFT&apos;s in one place as easily as you would on CoinGecko or CoinMarketCap.
            </h3>
            <div className="items-center justify-center mb-5 mx-5 flex  sm:mx-24 md:mx-32 xl:mx-0">
              <Image src="/Favoriting.gif" alt="Favoriting" width={1000} height={100} />
            </div>
          </div>
        </div>
        <Footer />
      </div>

    </>
  );
};

export default dynamic(() => Promise.resolve(Moonshot), { ssr: false });
