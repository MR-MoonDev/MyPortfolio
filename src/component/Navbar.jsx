
import React, { useState } from "react";
import pic from "../../public/mypic.jpeg";
import { MdMenu, MdClose } from "react-icons/md";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Experience",
    },
    {
      id: 4,
      text: "Contact",
    },
    {
      id: 5,
      text: "Certificate",
    },
  ];

  return (
    <>
      <div className="w-full fixed top-0 right-0 left-0 z-50 bg-white shadow-md">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-20 flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <img src={pic} className="object-cover rounded-full w-[50px] h-[50px]" alt="Profile" />
            <div>
              <h1 className="font-semibold text-xl cursor-pointer">
                Munee<span className="text-teal-300 ">B</span>
              </h1>
              <p className="text-sm">Web Developer</p>
            </div>
          </div>
          {/* Desktop navbar */}
          <div className="hidden md:flex space-x-8">
            {navItems.map(({ id, text }) => (
              <li
                className="hover:scale-105  duration-200 cursor-pointer list-none"
                key={id}
              >
                <Link
                  to={text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="text-teal-300 font-bold "
                  
                >
                  {text}
                </Link>
              </li>
            ))}
          </div>
          {/* Mobile menu icon */}
          <div onClick={() => setMenu(!menu)} className="md:hidden cursor-pointer">
            {menu ? <MdClose size={24} /> : <MdMenu size={24} />}
          </div>
        </div>
        {/* Mobile navbar */}
        {menu && (
          <div className="md:hidden bg-white">
            <ul className="flex flex-col h-screen items-center justify-center space-y-4 text-xl">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 cursor-pointer font-semibold list-none"
                  key={id}
                >
                  <Link
                    onClick={() => setMenu(!menu)}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="text-teal-300 font-bold"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
