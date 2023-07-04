import React from 'react';
import Image from 'next/image';
import logo from '../public/logo.png';
import { SiLinkedin } from 'react-icons/si';
import { PiTelegramLogoBold } from 'react-icons/pi';
import { PiGithubLogoBold } from 'react-icons/pi';

const Header = () => {
  return (
    <div className="p-4 xl:px-64 lg:px-36">
      <div className="flex items-center justify-between">
        <div className="">
          <Image src={logo} alt='logo' width={125} height={125} />

        </div>
        <div className="lg:text-[22px] text-[18px]">
          Blockchain Developer / Auditor
        </div>
        <div className="items-center px-2 hidden sm:block">
          <div className="flex">
            <div className="px-4 scale-125 ">
              <PiTelegramLogoBold />

            </div>
            <div className="px-4 scale-125">
              <PiGithubLogoBold />

            </div>
            <div className="px-4 scale-125">
              <SiLinkedin />

            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default Header;