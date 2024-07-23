
import React from "react";
import androidstudio from "../../public/Experience_Img/androidstudio.png";
import cpp from "../../public/Experience_Img/c++.png";
import css from "../../public/Experience_Img/css_logo.png";
import html from "../../public/Experience_Img/hyml_logo.png";
import xml from "../../public/Experience_Img/xml.png";
import js from "../../public/Experience_Img/javascript.png";
import react from "../../public/Experience_Img/react_logo.png";
import java from "../../public/Experience_Img/java_logo.jpg";

function Experience() {
  const cardItem = [
    {
      id: 1,
      logo: androidstudio,
      name: "Android Studio",
    },
    {
      id: 2,
      logo: cpp,
      name: "C++",
    },
    {
      id: 3,
      logo: css,
      name: "CSS",
    },
    {
      id: 4,
      logo: html,
      name: "HTML",
    },
    {
      id: 5,
      logo: xml,
      name: "XML",
    },
    {
      id: 6,
      logo: js,
      name: "JavaScript",
    },
    {
      id: 7,
      logo: react,
      name: "React",
    },
    {
      id: 8,
      logo: java,
      name: "Java",
    },
  ];

  return (
    <div
      name="Experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5 text-teal-300">Experience</h1>
        <p className="font-semibold">I have good experience in the following technologies:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className="animate-pulse flex flex-col items-center justify-center w-full h-[150px] md:h-[200px] border-[2px] rounded-lg shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[100px] md:w-[150px] p-1 " alt={name} />
              <div className="text-center mt-2">
                <div className="px-2 font-bold text-sm md:text-xl">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
