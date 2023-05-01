import React from "react";

function Footer(props) {
  return (
    <div className="bg-green-700  mt-2 pb-4">
      <div className="flex items-center justify-center border-b-4 p-2 m-2">
        <h2 className="text-2xl font-bold text-customBG">
          Kenya Sports Shooting Federation
        </h2>
      </div>
      <div className="flex justify-around mt-3">
        <div>
          <h3 className="text-customBG font-bold text-lg">New & Media</h3>
          <ul className=" list-none ">
            <li className="text-white text-lg cursor-pointer">News</li>
            <li className="text-white text-lg cursor-pointer">Videos</li>
            <li className="text-white text-lg cursor-pointer">Galleries</li>
          </ul>
        </div>
        <div>
          <h3 className="text-customBG font-bold text-lg">Competitions</h3>
          <ul className=" list-none ">
            <li className="text-white text-lg cursor-pointer">
              Events Calendar
            </li>
            <li className="text-white text-lg cursor-pointer">Results</li>
          </ul>
        </div>
        <div>
          <h3 className="text-customBG font-bold text-lg">Sitemap</h3>
          <ul className=" list-none ">
            <li className="text-white text-lg cursor-pointer">Home</li>
            <li className="text-white text-lg cursor-pointer">Blog</li>
            <li className="text-white text-lg cursor-pointer">Galleries</li>
            <li className="text-white text-lg cursor-pointer">Results</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
