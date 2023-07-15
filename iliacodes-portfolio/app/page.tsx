'use client';
import { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import '../styles/homePage.css';
import { MotionConfig } from 'framer-motion';
import { motion, AnimatePresence } from 'framer-motion';
import Nav from '../components/nav/Nav';
import logo from '../public/logo.png';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Test2 from '../components/Particles';



export default function Home() {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const animationDuration = 5 * 1000;
    setTimeout(() => {
      setShowNav(true);
    }, animationDuration);
  }, []);

  return (
    <main className="">
      {/* <Test2
        showAnimation={true}
      /> */}
      <Header />
      <div className="xl:mx-64 flex items-center p-24 box-shadow-[#0F0] blur-[0.5px] lg:mx-48">
        <motion.div className="flex items-center">
          <TypeAnimation
            sequence={[
              'hello user...',
              1000,
              'the blockchain is everywhere...',
              1000,
              'follow the ledger...',
              1000,
            ]}
            speed={65}
            className="text-[#9F9] font-light tracking-[0.05em] matrix-text scanline pointer-events-none sm:text-[36px] text-[24px]"
            wrapper="span"
            repeat={0}
          />
        </motion.div>
      </div>
      <div className="flex items-center justify-center">
        <AnimatePresence>
          {showNav && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              <Nav />
              <Footer />
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </main>
  );
}