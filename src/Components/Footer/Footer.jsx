import React from 'react';

const Footer = () => {
  return (
    <div className="bg-[#192b43] w-full min-h-[3rem] flex flex-col md:flex-row justify-between items-center p-4 rounded-lg">
      <div className="flex items-center justify-center gap-4 bg-white p-2 rounded-lg mb-4 md:mb-0">
        <a href="https://www.instagram.com/developer_kaushal/">
          <img className="h-6 md:h-4" src="/img/instagram.png" alt="Instagram" />
        </a>
        <a href="https://www.linkedin.com/in/kaushal-kumar-617bb0243/">
          <img className="h-6 md:h-4" src="/img/linkedin.png" alt="LinkedIn" />
        </a>
        <a href="">
          <img className="h-6 md:h-4" src="/img/youtube.png" alt="YouTube" />
        </a>
      </div>
      <h1 className="font-bold text-xl md:text-3xl text-white mb-4 md:mb-0">ILINK</h1>
      <h3 className="text-white font-bold text-sm md:text-base">copyright@-2024</h3>
    </div>
  );
};

export default Footer;
