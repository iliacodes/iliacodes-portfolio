'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeIn } from "../components/utils/motion.js";
import about from '../public/newlogo2.png';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { SiReact, SiTailwindcss, SiSolidity, SiNextdotjs, SiTypescript, SiJavascript, SiCss3, SiYoutube, SiLinkedin, SiGithub, SiExpress, SiHtml5 } from 'react-icons/si';
import { PiTelegramLogoBold } from 'react-icons/pi';
import { BiHardHat } from 'react-icons/bi';
import wagmi from '../public/wagmi.png';
import viem from '../public/viem.png';
import sql from '../public/sql1.png';
import web3js from '../public/web3js.png';
import mocha_chai from '../public/mocha_chai.png';
import ethers from '../public/ethers.png';
import git from '../public/git.png';
import nodejs from '../public/nodejs.png';

const AboutInsert = () => {
  const [ref, inView] = useInView({
    threshold: 0.4,
  });
  return (
    <section className="" >
      <div className="flex items-center justify-center sm:hidden">
        <Image src={about} alt="About Image" width={500} height={500} className="max-w-[400px] lg:max-w-[482px] h-[400px] object-cover" />
      </div>
      <div className="flex justify-center items-center sm:hidden mb-24">
        <Link href="https://www.youtube.com/channel/UC9-VztuxEtOON9-FrF61mRQ">
          <div className="px-4  text-red-500" >
            <SiYoutube title="YouTube" className="scale-150" />
          </div>
        </Link>
        <Link href="https://github.com/iliacodes">
          <div className="px-4  ">
            <SiGithub title="Github" className="scale-150" />
          </div>
        </Link>
        <Link href="https://linkedin.com/in/0x-ilia">
          <div className="px-4  text-[#0077B5]">
            <SiLinkedin title="LinkedIn" className="scale-150" />
          </div>
        </Link>
        <Link href="https://t.me/iliacodes">
          <div className="px-4  text-[#0077B5]">
            <PiTelegramLogoBold title="Telegram" className="scale-150" />
          </div>
        </Link>
      </div>
      <div className="sm:min-h-85 lg:min-h-75 flex items-center md:px-24 xs:px-0 " ref={ref}>
        <div className="containter mx-auto flex">
          <div className="flex flex-col gap-y-6 lg:flex-row lg:items-center lg:gap-x-12">
            <div className="flex-2 text-center lg:text-left">
              <motion.h1
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.8 }}
                className="text-[55px] leading-[0.8] lg:text-[100px]">
                iliacodes
              </motion.h1>
              <motion.div
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.8 }}
                className="mb-6 text-[24px] lg:text-[32px] leading-[1]">
                <span className=""></span>
                <TypeAnimation sequence={[
                  "full-stack developer",
                  2000,
                  "blockchain developer",
                  2000,
                  "smart-contract researcher",
                  2000,
                ]}
                  speed={60}
                  className="text-[#9F9] uppercase font-semibold"
                  wrapper='span'
                  repeat={Infinity}
                />
              </motion.div>
              <div className="my-5 hidden sm:block">
                As a driven individual with a deep passion for blockchain technology, I&apos;m
                excited about realizing ideas and making a positive impact on the world. My vision is to leverage my skills to contribute to a movement that can transform the way we live and work.
              </div>
              <div className="sm:hidden flex flex-col">
                <motion.p
                  variants={fadeIn("up", 0.9)}
                  initial="hidden"
                  whileInView={'show'}
                  viewport={{ once: false, amount: 0.8 }}>
                  <div className="sm:hidden my-5 flex items-center justify-center text-[24px]">
                    My vision is to leverage my skills to contribute to a movement that can transform the way we live and work.
                  </div>
                </motion.p>
              </div>
            </div>
          </div>
          <div className="hidden sm:block">
            <div>
              <div>
                <Image src={about} alt="About Image" width={500} height={500} className="max-w-[400px] lg:max-w-[482px] h-[400px] object-cover" />
              </div>
            </div>
            <motion.div
              variants={fadeIn("up", 0.9)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.8 }}
              className=""
            >
              <div className="">
                <div className="flex justify-center">
                  <Link href="https://www.youtube.com/channel/UC9-VztuxEtOON9-FrF61mRQ" target="_blank">
                    <div className="px-8  text-red-500" >
                      <SiYoutube title="YouTube" className="scale-150" />
                    </div>
                  </Link>
                  <Link href="https://github.com/iliacodes" target="_blank">
                    <div className="px-8  ">
                      <SiGithub title="Github" className="scale-150" />
                    </div>
                  </Link>
                  <Link href="https://linkedin.com/in/0x-ilia" target="_blank">
                    <div className="px-8 text-[#0077B5]">
                      <SiLinkedin title="LinkedIn" className="scale-150" />
                    </div>
                  </Link>
                  <Link href="https://t.me/iliacodes">
                    <div className="px-4  text-[#0077B5]">
                      <PiTelegramLogoBold title="Telegram" className="scale-150" />
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <h2 className="flex md:px-24 xs:px-0 text-[32px]">
          Tech Stack:
        </h2>
        <div>
          <h2 className="flex md:px-24 xs:px-2 text-[24px]">
            Languages:
          </h2>
          <h2 className="sm:text-[32px] text-[20px] text-[#D2E2DF] uppercase tracking-wider p-5 lg:mx-24 xl:mx-64 xl:p-0 flex items-center mb-12 flex-wrap gap-5 my-5 ">
            <div className="mx-5 text-[#C0C0C0] z-10 scale-150 sm:scale-100" >
              <SiSolidity title="Solidity" />
            </div>
            <div className="mx-5 text-[#007acc] scale-150 sm:scale-100">
              <SiTypescript title="Typescript" />
            </div>
            <div className="mx-5 text-[#FFFF00] scale-150 sm:scale-100">
              <SiJavascript title="Javascript" />
            </div>
            <div className="mx-5 text-red-500 scale-150 sm:scale-100">
              <SiHtml5 title="HTML5" />
            </div>
            <div className="mx-5 text-blue-500 scale-150 sm:scale-100">
              <SiCss3 title="CSS3" />
            </div>
            <div className="mx-5" title="SQL">
              <Image src={sql} alt="sql" className="w-16 h-16" />
            </div>
          </h2>

        </div>
        <div>
          <h2 className="flex md:px-24 xs:px-2 text-[24px]">
            Frameworks + Libraries:
          </h2>
          <h2 className="sm:text-[32px] text-[20px] text-[#D2E2DF] uppercase tracking-wider p-5 lg:mx-24 xl:mx-64 xl:p-0 flex items-center mb-12 flex-wrap gap-5 my-5">
            <div className="mx-5 text-[#61DBFB] z-10 scale-150 sm:scale-100" >
              <SiReact title="React" />
            </div>
            <div className="text-blue-400 z-10 mx-5 scale-150 sm:scale-100" >
              <SiTailwindcss title="Tailwindcss" />
            </div>
            <div className="mx-5 text-[#FFFF00] scale-150 sm:scale-100" >
              <BiHardHat title="Hardhat" />
            </div>
            <div className="text-[#C0C0C0] z-10 mx-5 scale-150 sm:scale-100" >
              <SiNextdotjs title="Nextjs" />
            </div>
            <div title="wagmi" className="mx-5">
              <Image src={wagmi} alt="wagmi" className="w-10 h-10" />
            </div>
            <div className="mx-5" title="viem">
              <Image src={viem} alt="viem" className="w-8 h-8" />
            </div>
            <div className="mx-5" title="Ethersjs">
              <Image src={ethers} alt="Ethers" className="w-10 h-8" />
            </div>
            <div className="mx-5" title='Web3js'>
              <Image src={web3js} alt="Web3js" className="w-8 h-8" />
            </div>
            <div className="mx-5" title='mocha_chai'>
              <Image src={mocha_chai} alt="Mocha + Chai" className="w-24 h-10" />
            </div>
            <div className="mx-5 scale-150 sm:scale-100">
              <SiExpress title="Express js" />
            </div>
          </h2>
        </div>
        <div>
          <h2 className="flex md:px-24 xs:px-2 text-[24px]">
            Runtime + Version Control:
          </h2>
          <h2 className="sm:text-[32px] text-[20px] text-[#D2E2DF] uppercase tracking-wider p-5 lg:mx-24 xl:mx-64 xl:p-0 flex items-center mb-12 flex-wrap gap-5 my-5">
            <div title="git" className="mx-5 ">
              <Image src={git} alt="git" className="w-10 h-10" />
            </div>
            <div title="Node js" className="mx-5">
              <Image src={nodejs} alt="Node js" className="w-10 h-10" />
            </div>
          </h2>
        </div>

      </div>
    </section>

  );
};

export default dynamic(() => Promise.resolve(AboutInsert), { ssr: false });