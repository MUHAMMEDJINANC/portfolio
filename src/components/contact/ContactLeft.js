import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Muhammed Jinan C</h3>
        <p className="text-lg font-normal text-gray-400">
          Software Developer
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 9778371535</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">muhammedjinanch@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
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
    </div>
  );
}

export default ContactLeft;
