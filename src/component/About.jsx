import React from "react";
import Certificate from "./Certificate";

function About() {
  return (
    <div name="About" className="max-w-screen 2xl:container mx-auto px-4 md:px-20 my-15">
      <div>
        <h1 className="text-3xl font-bold mb-5 text-teal-300">About</h1>
        <p>
          Greetings! I'm Muhammad Muneeb ul Raza, a dedicated 21-year-old
          undergraduate pursuing a degree in Computer Science at Government
          College University, Hyderabad. With a strong passion for technology, I
          specialize in web development, Android app development, and
          educational tutoring.
          <br />
          <br />
          In the realm of web and mobile development, I bring a blend of
          creativity and technical expertise. I thrive on crafting innovative
          solutions that enhance user experiences and solve real-world problems.
          Beyond my technical pursuits, I also enjoy sharing knowledge as a home
          tutor, fostering learning and growth within my community.
          <br />
          <br />I am committed to continuous learning and improvement, always
          seeking new challenges to expand my skills and make meaningful
          contributions in the world of technology
        </p>
        <br />
        <h1 className=" text-teal-800 font-semibold text-xl">Education</h1>
        <span>
          Hello! My name is Muhammad Muneeb ul Raza, and I'd like to share my
          educational journey with you. It all began at IQRA Higher Secondary
          School, where I laid the foundation of my academic pursuits from
          classes I to VI, spanning the years 2010 to 2016. This early phase of
          my education instilled in me a strong base of knowledge and curiosity.
          <br />
          <br />
          In 2017, I transitioned to Kaim Khan Memorial Higher Secondary School,
          embarking on a transformative educational path from Class VII through
          Intermediate. Over the course of six years, from 2017 to 2022, I not
          only excelled academically but also developed valuable life skills and
          a deeper understanding of various subjects.
          <br />
          <br />
          My educational voyage reached a significant milestone when I enrolled
          at Government College University, Hyderabad, in pursuit of a Bachelor
          of Science degree in Computer Science, commencing in 2023. This
          transition marks a crucial step forward in my academic and
          professional journey, where I continue to explore my passion for
          technology and expand my knowledge in the field.
          <br />
          <br /> I am committed to leveraging my educational experiences to
          contribute meaningfully to the world of technology and beyond, driven
          by a thirst for knowledge and a desire to make a positive impact.
        </span>
        <br />
        <br />
        <h1 className="text-teal-800 font-semibold text-xl">Skills</h1>
        <span>
          <ul class="list-disc ps-4">
            <li className="font-bold">Photo Editing</li>
            <p>
              Proficient in using photo editing software such as Adobe Photoshop
              or GIMP to enhance and manipulate images for various purposes
            </p>
            <br />
          </ul>
          <ul class="list-disc ps-4">
            <li className="font-bold">Video Editing</li>
            <p>
              Skilled in video editing tools like Adobe Premiere Pro or Final
              Cut Pro, adept at creating engaging and polished video content.
            </p>
          </ul>
          <br />
          <ul class="list-disc ps-4">
            <li className="font-bold">Web Design</li>
            <p>
              Experienced in designing visually appealing and user-friendly
              websites using HTML, CSS, and JavaScript, with an eye for detail
              and modern design principles.
            </p>
          </ul>
          <br />
          <ul class="list-disc ps-4">
            <li className="font-bold">Web Development (React)</li>
            <p>
              Capable of developing dynamic web applications using React.js
              framework, leveraging components and state management for
              interactive user interfaces.
            </p>
          </ul>
          <br />
          <ul class="list-disc ps-4">
            <li className="font-bold">Android Development (Java and XML)</li>
            <p>
              Proficient in Android app development using Java and XML, with the
              ability to create responsive and functional mobile applications
              for diverse purposes.
            </p>
          </ul>
          <br />
          <ul class="list-disc ps-4">
            <li className="font-bold">Database Management (MySQL)</li>
            <p>
              Competent in MySQL database management, including database design,
              querying, and maintenance to ensure efficient data storage and
              retrieval.
            </p>
          </ul>
        </span>

        <br />
        <br />
        <h1 className="text-teal-800 font-semibold text-xl">Experience</h1>
        <span>
          Web Development (HTML/CSS/JavaScript): I have approximately 1.5 years
          of hands-on experience in web development, utilizing HTML, CSS, and
          JavaScript to create responsive and interactive websites. During this
          time, I have honed my skills in front-end development, implementing
          modern design trends and optimizing user experiences. Android
          Development (Java/MySQL)
          <br /> Over the past year, I have focused on Android app development
          using Java and integrated MySQL for efficient data management within
          mobile applications. This experience has allowed me to build
          functional and scalable Android applications, applying best practices
          in software architecture and user interface design. <br /> React
          Development My journey with React.js spans around 6 months, during
          which I have delved into building dynamic and component-based web
          applications. I have gained proficiency in state management, routing,
          and integrating APIs to create robust and interactive user interfaces
          using React.
        </span>

        <br />
        <br />
        <h1 className="text-teal-800 font-semibold text-xl">
          Achievenments and Awards
        </h1>
        <span>
          <h1 className="font-bold">Certifications</h1>I hold
          certifications in computer networking, C++, Java programming, MySQL
          database management, and front-end web development using HTML/CSS.
          These certifications validate my skills and proficiency in key areas
          of software development and technology infrastructure.
          <br /><br />
          <h1 className="font-bold">Specialized</h1>
           
          Training: I have completed specialized courses in C++, Java, and
          MySQL, equipping me with advanced programming knowledge and database
          management capabilities.
          <br /><br />
          <h1 className="font-bold">Front-end Development Skills</h1>
            As a certified
          front-end developer, I excel in crafting visually appealing and
          user-friendly web interfaces using HTML and CSS, leveraging my
          understanding of HTML tags and attributes to create structured and
          efficient web content.
          <br /><br />
          <h1 className="font-bold"> React.js Proficiency</h1>
          
           I have actively engaged
          in React.js tutorials, enhancing my abilities to develop dynamic and
          responsive web applications using this popular JavaScript library.
          <br /><br />
          <h1 className="font-bold"> Achievements</h1>
          My journey includes notable achievements such as
          participating in coding competitions at Government College University
          and securing the 3rd position in an AI project. These experiences
          underscore my problem-solving skills and innovative approach to
          technology. I am deeply passionate about leveraging my skills and
          knowledge to contribute meaningfully to the ever-evolving field of
          computer science, and I am excited about the possibilities that lie
          ahead in my career.
        </span>
      </div>
      <Certificate/>
    </div>
  );
}

export default About;
