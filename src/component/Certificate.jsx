import React from "react";
import gitandgithud from "../../public/CertificateImg/gitandgithub.jpg";
import ComputerNetworking from "../../public/CertificateImg/ComputerNetworking.jpg";
import Css from "../../public/CertificateImg/Css.jpg";
import FrontEnd from "../../public/CertificateImg/FrontEnd.jpg";
import htmlTags from "../../public/CertificateImg/htmlTags.jpg";
import Mysql from "../../public/CertificateImg/MySql.jpg";
import Reactjs from "../../public/CertificateImg/Reactjs.jpg";
import Cpp from "../../public/CertificateImg/C++.jpg";
import ecmascript from "../../public/CertificateImg/ecmascript.png";
const Certificate = () => {
  const CertificateImg = [
    {
      img: gitandgithud,
      url: "https://www.mindluster.com/student/certificate/16252458986",
    },
    {
      img: ComputerNetworking,
      url: "https://www.mindluster.com/student/certificate/16252453523",
    },
    {
        img: Mysql,
        url: "https://www.mindluster.com/student/certificate/16252451439",
      },
    {
      img: Css,
      url: "https://olympus.mygreatlearning.com/courses/12800/certificate",
    },
    {
      img: FrontEnd,
      url: "https://olympus.mygreatlearning.com/courses/12800/certificate",
    },
    {
      img: htmlTags,
      url: "https://olympus.mygreatlearning.com/courses/47903/certificate",
    },
   
    {
      img: Reactjs,
      url: "https://olympus.mygreatlearning.com/courses/52045/certificate",
    },
    {
      img: Cpp,
      url: "https://olympus.mygreatlearning.com/courses/57491/certificate",
    },
    {
        img: ecmascript,
        url: "https://www.linkedin.com/learning/certificates/2ebc7f46c6181491620e90a12975ce0b418265b1a5894c22d9a4793a8f7df800?trk=share_certificate",
      },
  ];
  return (
    <div
      name="Certificate"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-10"
    >
      <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-5 bg-slate-100 p-3 rounded-md">
        {CertificateImg.map(({ img, url }, index) => (
          <li key={index} className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <a href={url} target="_blank" rel="noopener noreferrer">
              <img src={img} alt="img Not found" className="transition-transform duration-300 ease-in-out transform hover:scale-105" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Certificate;
