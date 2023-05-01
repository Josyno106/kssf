import React from "react";

import icfra from "../assets/icfra.jpg";
import idpa from "../assets/IDPA.png";
import issf from "../assets/issf.png";
import nra from "../assets/nra.png";
import nsra from "../assets/nsra.png";
import uspsa from "../assets/uspsa.png";
import logo from "../assets/logo.png";
import Image from "next/image";

function International(props) {
  const affiliations = [
    {
      name: "icfra",
      logo: icfra,
    },
    {
      name: "idpa",
      logo: idpa,
    },
    {
      name: "issf",
      logo: issf,
    },
    {
      name: "nra",
      logo: nra,
    },
    {
      name: "nsra",
      logo: nsra,
    },
    {
      name: "uspsa",
      logo: uspsa,
    },
  ];
  return (
    <>
      <div className="bg-white flex flex-wrap items-center justify-between pt-4 pl-4">
        <h2 className="text-3xl font-poppins font-extrabold ">
          International Affiliation
        </h2>
      </div>
      <div className="bg-white flex flex-wrap items-center justify-between p-6">
        {affiliations.map((aff, index) => (
          <div key={index} className="cursor-pointer">
            <Image src={aff.logo} height="100" width="100" />
          </div>
        ))}
      </div>
    </>
  );
}

export default International;
