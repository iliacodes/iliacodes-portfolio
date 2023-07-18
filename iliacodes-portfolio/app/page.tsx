'use client';
import { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import '../styles/homePage.css';
import { motion, AnimatePresence } from 'framer-motion';
import Nav from '../components/nav/Nav';
import NavMobile from '../components/nav/NavMobile';
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
    <main>
      <Header />
      <div className="xl:mx-64 items-center p-24 lg:mx-48 hidden sm:block">
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
            className="text-[#0F0] tracking-[0.05em] pointer-events-none sm:text-[36px] text-[24px] font-semibold"
            wrapper="span"
            repeat={0}
          />
        </motion.div>
      </div>
      <div className="flex flex-col items-center p-8 sm:hidden">
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
          className="text-[#0F0] tracking-[0.05em] pointer-events-none sm:text-[36px] text-[24px] font-semibold"
          wrapper="span"
          repeat={0}
        />
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
              <div className="hidden sm:block">
                <Nav />
              </div>
              <div className="sm:hidden">
                <NavMobile />
              </div>
              <div className="mt-24 sm:mt-0">
                <Footer />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}