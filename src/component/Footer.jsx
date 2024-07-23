import React from "react";
// import { FaInstagramSquare, FaLinkedin, FaFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen 2xl:container mx-auto px-4 md:px-20">
          <div className="flex flex-col items-center justify-center">
            <div className="flex space-x-4">
                    <a
                      href="https://www.facebook.com/muneeb.siddiqui.9400?mibextid=5N0WYUVeg6tIdfMR"
                      target="_blank"
                    >
                      <FaFacebook className="text-2xl cursor-pointer text-blue-600" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/muneebraza-dev"
                      target="_blank"
                    >
                      <FaLinkedin className="text-2xl cursor-pointer text-blue-900" />
                    </a>
                    <a
                      href="https://www.instagram.com/muneeb_raza_09?igsh=MTdkcDBhbGhrdzAwdA=="
                      target="_blank"
                    >
                      <FaInstagramSquare className="text-2xl cursor-pointer text-pink-700" />
                    </a>  
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 flex flex-col items-center">
            <p>These social media icons go to my profile</p>
            <p>Thank you for visit my site  &#128151; </p>
          </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
