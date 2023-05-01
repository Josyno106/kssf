import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./Hero";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <div className="w-full h-full bg-customBG ">
        <div className="flex flex-col bg-customBG min-h-screen max-w-5xl mr-auto ml-auto ">
          <Navbar />
          <HeroSection />

          {children}
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Layout;
