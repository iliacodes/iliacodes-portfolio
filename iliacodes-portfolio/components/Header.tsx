import React from 'react';
import Image from 'next/image';
import logo from '../public/logo.png';
import { SiLinkedin } from 'react-icons/si';
import { PiTelegramLogoBold } from 'react-icons/pi';
import { PiGithubLogoBold } from 'react-icons/pi';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="p-4 xl:px-64 lg:px-36">
      <div className="flex items-center justify-between">
        <Link href="/">
          <div className="">
            <Image src={logo} alt='logo' width={125} height={125} />

          </div>
        </Link>
        <div className="lg:text-[22px] text-[18px]" >
          Blockchain Developer / Auditor
        </div>
        <div className="items-center px-2 hidden sm:block">
          <div className="flex">
            <Link href="https://t.me/iliacodes" target="_blank">
            <div className="px-4 scale-125 ">
              <PiTelegramLogoBold />
            </div>
            </Link>
            <Link href="https://github.com/iliacodes" target="_blank">
              <div className="px-4 scale-125">
                <PiGithubLogoBold />
              </div>
            </Link>
            <Link href="https://linkedin.com/in/0x-ilia" target="_blank">
              <div className="px-4 scale-125">
                <SiLinkedin />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;