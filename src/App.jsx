import React from "react";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import Experience from "./component/Experience";

import Footer from "./component/Footer";
import Contact from "./component/Contact";
import { Toaster } from "react-hot-toast";
export default function App() {
  return (
    <>
      <div >
      <Navbar />
      <Home />
      <About />
      <Experience/>
      <Contact/>
      <Footer/>
      </div>
      <Toaster/>
    </>
  );
}
