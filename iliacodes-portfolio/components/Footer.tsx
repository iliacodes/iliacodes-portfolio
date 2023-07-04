import { SiLinkedin } from 'react-icons/si';
import { PiTelegramLogoBold } from 'react-icons/pi';
import { PiGithubLogoBold } from 'react-icons/pi';

import React from 'react';

const Footer = () => {
  return (
    <div className="items-center flex justify-center p-16">
      <div className="flex">
        <div className="px-8 scale-125 ">
          <PiTelegramLogoBold />

        </div>
        <div className="px-8 scale-125">
          <PiGithubLogoBold />

        </div>
        <div className="px-8 scale-125">
          <SiLinkedin />

        </div>
      </div>
    </div>
  );
};

export default Footer;