import React from "react";

// social-media   icon
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";

// work icon
import { IoLogoAndroid } from "react-icons/io";
import { TbBrandMysql } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { ReactTyped } from "react-typed";
// right image
import pic from "../../public/mypic.jpeg";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen 2xl:container mx-auto px-4 md:px-20 my-20"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2  mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span>Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>
              <ReactTyped
                className="text-red-600 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                loop={true}
                backSpeed={50}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
            I am M.Muneeb ul Raza, a diligent student currently enrolled in the Computer Science program at Government College University Hyderabad. I am passionate about exploring the intersections of technology and innovation, with a keen interest in areas such as software development, web technologies, and emerging trends in the tech industry. Through my academic journey, I am dedicated to acquiring knowledge and practical skills that contribute to my growth as a future professional in the field of computer science.
            </p>
            <br />
            {/* social media icon */}
            <div className="flex flex-col items-center md:flex-row  justify-between space-y-6 md:space-y-0">
              <div className="space-y-2">
                <h1 className="font-bold">Available on</h1>
                <ul className="flex space-x-5 ">
                  <li className="hover:text-blue-500">
                    <a
                      href="https://www.facebook.com/muneeb.siddiqui.9400?mibextid=5N0WYUVeg6tIdfMR"
                      target="_blank"
                    >
                      <FaFacebook className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li className="hover:text-blue-900">
                    <a
                      href="https://www.linkedin.com/in/muneebraza-dev"
                      target="_blank"
                    >
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li className="hover:text-pink-700">
                    <a
                      href="https://www.instagram.com/muneeb_raza_09?igsh=MTdkcDBhbGhrdzAwdA=="
                      target="_blank"
                    >
                      <FaInstagramSquare className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              {/* work on */}
              <div className="space-y-2">
                <h1 className="font-bold ">Currently working on</h1>
                <div className="flex  justify-evenly space-x-5  ">
                  <IoLogoAndroid className="text-xl md:text-3xl hover:scale-110 hover:text-green-600 duration-200 rounded-full border-{2px}" />
                  <TbBrandMysql className="text-xl md:text-3xl hover:scale-110 hover:text-gray-400 duration-200 rounded-full border-{2px}" />
                  <FaReact className="text-xl md:text-3xl hover:scale-110  hover:text-blue-400 duration-200 rounded-full border-{2px}" />
                </div>
              </div>
            </div>
          </div>

          {/* Right side */}

          <div className="md:w-1/2 ml-0 md:ml-48 md:mt-20  mt-8 order-1 ">
            <img
              src={pic}
              className=" object-cover rounded-full w-[250px] h-[250px] m-auto md:w-[450px] md:h-[450px]"
              alt=""
            />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Home;
