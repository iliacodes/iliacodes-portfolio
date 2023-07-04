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
      <Header />
      <div className="xl:mx-64 flex items-center p-24 box-shadow-[#0F0] blur-[0.5px] lg:mx-48">
        <motion.div className="flex items-center">
          <TypeAnimation
            sequence={[
              'Wake up user...',
              1000,
              'The blockchain is everywhere...',
              1000,
              'Follow the ledger...',
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
        <AnimatePresence> {/* Wrap the Nav with AnimatePresence */}
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