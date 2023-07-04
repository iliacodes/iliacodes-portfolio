'use client';
import { useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import '../styles/homePage.css';
import { MotionConfig } from 'framer-motion';
import { motion } from 'framer-motion';
import Nav from '../components/Nav';
import logo from '../public/logo.png';
import Image from 'next/image';
import Header from '../components/Header';


export default function Home() {

  return (
    <main className="border border-red-50">
      {/* <Image src='/logo.svg' alt='logo' width={100} height={100}>
        {logo}
      </Image> */}
      <Header />
      <div className="flex items-center p-24 box-shadow-[#0F0] blur-[0.5px] text-md sm:text-[24px] border border-red-50">
        <motion.div>
          <TypeAnimation
            sequence={[
              'Wake up user...',
              1000,
              'The blockchain is everywhere...',
              1000,
              'Follow the ledger...',
              1000,
            ]}
            speed={11}
            className="text-[#9F9] font-light tracking-[0.05em] matrix-text scanline pointer-events-none text-[36px]"
            wrapper="span"
            repeat={0}
          />
        </motion.div>
      </div>
      < Nav />
    </main>
  );
}