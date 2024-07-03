import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact, FaInstagram } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs, SiPycharm, SiPhp, SiDotnet } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
  <a href="https://www.facebook.com/muhmmed.jinan.3?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="bannerIcon">
    <FaFacebookF />
  </a>
  <a href="https://www.instagram.com/jin_an_c/?igsh=NXNqanRuM2xqZ2E2" target="_blank" rel="noopener noreferrer" className="bannerIcon">
    <FaInstagram />
  </a>
  <a href="https://www.linkedin.com/in/muhammed-jinan-c-0b126227a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="bannerIcon">
    <FaLinkedinIn />
  </a>
</div>

        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiPycharm />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiDotnet />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media