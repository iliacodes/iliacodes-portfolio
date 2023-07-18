import { SiLinkedin } from 'react-icons/si';
import { PiTelegramLogoBold } from 'react-icons/pi';
import { PiGithubLogoBold } from 'react-icons/pi';
import Link from 'next/link';

import React from 'react';

const Footer = () => {
  return (
    <div className="items-center flex justify-center p-16 mb-24 border-t border-zinc-500">
      <div className="flex">
      <Link href="https://t.me/iliacodes" target="_blank">
            <div className="px-8 scale-125 ">
              <PiTelegramLogoBold />
            </div>
            </Link>
        <Link href="https://github.com/iliacodes" target="_blank">
          <div className="px-8 scale-125">
            <PiGithubLogoBold />
          </div>
        </Link>
        <Link href="https://linkedin.com/in/0x-ilia" target="_blank">
          <div className="px-8 scale-125">
            <SiLinkedin />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Footer;