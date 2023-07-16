import React from 'react';
import Link from 'next/link';
import { SiAboutdotme } from 'react-icons/si';
import { FaWalking } from 'react-icons/fa';
import { LiaHammerSolid } from 'react-icons/lia';
import { RiContactsLine } from 'react-icons/ri';

const SubHeader = () => {
  return (
    <div className="fixed bottom-1 lg:bottom-8 w-full overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-300 via-green-400 to-green-500 z-50 text-[black] ">
      <div className="container mx-auto ">
        <div className="w-full h-[96px] backdrop-blur-md max-w-[480px] mx-auto flex justify-between text-2xl  items-center">
          <Link href="/about" className="hover:text-[#660066] cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
            <div className="sm:hidden block">
              <SiAboutdotme />
            </div>
            <div className="hidden sm:block">
              About
            </div>
          </Link>
          <Link href="/journey" className="hover:text-[#660066] cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
            <div className="sm:hidden block">
              <FaWalking />
            </div>
            <div className="sm:block hidden">
              Journey
            </div>
          </Link>
          <Link href="/projects" className="hover:text-[#660066] cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
            <div className="sm:hidden block">
              <LiaHammerSolid />
            </div>
            <div className="sm:block hidden">
              Projects
            </div>
          </Link>
          <Link href='/contact' className="hover:text-[#660066] cursor-pointer w-[60px] h-[60px] flex items-center justify-center" title="contact">
            <div className="sm:hidden block">
              <RiContactsLine title="contact" />
            </div>
            <div className="sm:block hidden">
              Contact
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;